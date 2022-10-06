import {useEffect, useState} from 'react'

export const useUsers = (userId) => {
    const [users, setUser] = useState({});

    const getUser = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/users/${userId}`);
            const json = await res.json();

            setUser(json);
        } catch (error) {
            setUser({})
        }
    }

    useEffect(() => {
            getUser();
        }
        , [])


    return users
}