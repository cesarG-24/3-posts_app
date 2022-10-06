import {useEffect, useState} from 'react'

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);


    const nextPage = () => {
        if (counter >= 9) return;
        setCounter((counter) => counter + 1);
    }
    const prevPage = () => {
        if (counter <= 0) return;
        setCounter((counter) => counter - 1);
    }

    const getPosts = async () => {
        const res = await fetch(`https://dummyjson.com/posts?limit=16&skip=${counter}`);
        const json = await res.json();
        const usersData = json.posts;

        setPosts(usersData);
    }

    useEffect(() => {
        getPosts();
        }, [counter])


    return {posts,
        prevPage,
        nextPage,
        counter,
    };
}