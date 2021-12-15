import Head from 'next/head'
import {useContext, useEffect} from "react";
import {Store} from "../context/storeProvider";
import {useRouter} from "next/router";
import Items from "../components/Items";
import Loading from "../components/Loading";

export default function Home() {
    const router = useRouter()
    const {arrOfUsers, setPageNum, loading} = useContext(Store)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    const handleScroll = () => {
        const scrollHeight = Math.ceil(window.scrollY + window.innerHeight)
        const windowHeight = document.documentElement.scrollHeight
        if (scrollHeight === windowHeight) setPageNum(prev => prev + 1)
    }

    const handleClick = (id) => {
        router.push({
            pathname: `/user/${id}`,
            id: id
        })
    }

    return (
        <>
            <Head>
                <title>SweeftDigital</title>
            </Head>
            <div className='p-5'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {(arrOfUsers?.map((el, i) => (
                        <Items key={`${i}_${el.name}`} {...el} handleClick={handleClick}/>
                    )))}
                </div>
            </div>
            {loading &&   <Loading />}
        </>
    )
}

