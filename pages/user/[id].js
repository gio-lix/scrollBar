import React, {useContext, useEffect, useState} from 'react';
import {Store} from "../../context/storeProvider";
import {useRouter} from "next/router";
import {getUsers} from "../api/take";
import Items from "../../components/Items";
import Info from "../../components/Info";
import Loading from "../../components/Loading";
import Head from 'next/head'

const UserPage = () => {
    const router = useRouter()
    const {setPage, friends, setUserFriendsId, setFriends, loading, setCount} = useContext(Store)
    const [detailOfUser, setDetailOfUser] = useState([]);
    const [check, setCheck] = useState(false);
    const [showUser, setShowUser] = useState();
    const {id} = router.query

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    const handleScroll = () => {
        const scrollHeight = Math.ceil(window.scrollY + window.innerHeight)
        const windowHeight = document.documentElement.scrollHeight
        if (scrollHeight === windowHeight) {
            setPage(prev => prev + 1)
        }
    }

    // fetch user data by ID
    useEffect(() => {
        if (detailOfUser.some(el => el.id === Number(id))) return
        const userId = async () => {
            try {
                const userdata = await getUsers.fetchUserId(id)
                setDetailOfUser( [ userdata,...detailOfUser])
            } catch (err) {
                console.log(err)
            }
        }
        userId()
    }, [id]);

    const showDetailUser = (id) => {
        const filterData = detailOfUser.filter(el => el.id === id)
        setShowUser(filterData[0])
        setCheck(true)
    }

    const handleClick = (id) => {
        setCount(pre => pre + 1)
        setFriends([])
        setUserFriendsId(Number(id))
        setPage(1)
        setCheck(false)
        router.push({
            pathname: `/user/${id}`,
        })
    }

    const defaultValue = detailOfUser.filter(el => el.id === +id)

    return (
        <>
            <Head>
                <title>SweeftDigital</title>
            </Head>

            <div className={`${detailOfUser.length > 0 && ' h-auto w-full '}`}>
                {check ? (
                    <>
                        <Info
                            id={showUser?.id}
                            name={showUser?.name}
                            image={showUser?.imageUrl}
                            lastName={showUser?.lastName}
                            prefix={showUser?.prefix}
                            title={showUser?.title}
                            email={showUser?.email}
                            ip={showUser?.ip}
                            jobArea={showUser?.jobArea}
                            jobType={showUser?.jobType}
                            jobDescriptor={showUser?.jobDescriptor}
                            company={showUser?.company.name}
                            suffix={showUser?.company.suffix}
                            city={showUser?.address.city}
                            country={showUser?.address.country}
                            state={showUser?.address.state}
                            streetAddress={showUser?.address.streetAddress}
                            zipCode={showUser?.address.zipCode}
                        />
                    </>
                ) : (
                    <>
                        <Info
                            id={`${id}`}
                            name={defaultValue[0]?.name}
                            image={defaultValue[0]?.imageUrl}
                            lastName={defaultValue[0]?.lastName}
                            prefix={defaultValue[0]?.prefix}
                            title={defaultValue[0]?.title}
                            email={defaultValue[0]?.email}
                            ip={defaultValue[0]?.ip}
                            jobArea={defaultValue[0]?.jobArea}
                            jobType={defaultValue[0]?.jobType}
                            jobDescriptor={defaultValue[0]?.jobDescriptor}
                            company={defaultValue[0]?.company.name}
                            suffix={defaultValue[0]?.company.suffix}
                            city={defaultValue[0]?.address.city}
                            country={defaultValue[0]?.address.country}
                            state={defaultValue[0]?.address.state}
                            streetAddress={defaultValue[0]?.address.streetAddress}
                            zipCode={defaultValue[0]?.address.zipCode}
                        />
                    </>
                )}
                <div  className='flex flex-wrap px-5'>
                    {detailOfUser?.map((user, i) => (
                        <div key={`${i}_${user.name}`} className='flex'>
                            <div onClick={() => showDetailUser(user.id )}  className='flex active:text-red-700 space-x-3 cursor-pointer  underline text-violet-900  '>
                                <span>{user.prefix}</span>
                                <div className='flex space-x-1'>
                                    <p> {user.name}</p>
                                    <p>{user.lastName}</p>
                                </div>
                            </div>
                            <p className='px-2'> {`>`} </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-5'>
                <p className='text-2xl font-bold my-2'>Friends:</p>
            </div>
            {/* all users */}
            <div  className='grid sm:grid-cols-2  lg:grid-cols-4  gap-6 '>
                {(friends?.map((el, i) => (
                    <Items key={`${i}_${el.name}`} handleClick={handleClick} {...el} />
                )))}
            </div>
            {loading &&  <Loading />}
        </>
    );
};

export default UserPage;
