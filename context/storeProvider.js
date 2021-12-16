import {createContext, useEffect, useState} from "react";
import {getUsers} from "../pages/api/take";

export const Store = createContext()

export default function StoreProvider ({children}) {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [arrOfUsers, setArrOfUsers] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const [userFriendsId, setUserFriendsId] = useState(1);
    const [page, setPage] = useState(1);
    const [friends, setFriends] = useState([]);


    // get all friends
    useEffect(() => {
        const friendsData = async () => {
            try {
                setLoading(true)
                const data = await getUsers.fetchDUserFriends(userFriendsId, page)
                setFriends([...friends, ...data.list])
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        friendsData()
    }, [userFriendsId, page, count]);


    // get all users
    useEffect(() => {
        const data = async () => {
            try {
                setLoading(true)
                const {list} = await getUsers.fetchData(pageNum, 20)
                setArrOfUsers([...arrOfUsers, ...list] )
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        data()
    }, [pageNum]);



    return (
        <Store.Provider value={{count, loading,setCount,arrOfUsers, setUserFriendsId, setFriends, friends , setPageNum, pageNum, setPage}}>
                {children}
        </Store.Provider>
    )
}