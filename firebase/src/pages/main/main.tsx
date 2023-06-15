import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Post } from './post';

export interface Page {
    id: string;
    userId: string;
    username: string;
    title: string;
    description: string;
}

export const Main = () => {
    const [pagesList, setPagesList] = useState<Page[] | null>(null);
    const pagesRef = collection(db, 'pages');

    const getPages = async () => {
        const data = await getDocs(pagesRef)
        setPagesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Page[])
    };

    useEffect(() => {
        getPages();
    }, []);
    
    return <div> {pagesList?.map((post) => ( <Post post={post} />
    ))} </div>
};