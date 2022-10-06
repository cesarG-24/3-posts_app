import {useEffect, useState} from 'react'

export const useComments = (postId) => {
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
            const json = await res.json();

            setComments(json.comments);
        } catch (error) {
            setComments([])
        }
    }

    useEffect(() => {
            getComments();
        }
        , [])


    return comments
}