import React, {useContext} from 'react';
import {Store} from "../context/storeProvider";

const Items = ({id, name, imageUrl, lastName, prefix, title, handleClick}) => {
    const {loading} = useContext(Store);

    return (
        <div onClick={() => handleClick(id)} className=' w-full h-auto border border-black p-1 cursor-pointer '>
            {!loading && (
                <div className='aspect-[5/4]'>
                    <img src={`${imageUrl}/${id}`} className='w-full h-full' alt="img"/>
                </div>
            )}

            <div className='mt-3 flex flex-col '>
                <div className='flex space-x-3 font-bold'>
                    <span>{prefix}</span>
                    <div className='flex space-x-1'>
                        <p> {name}</p>
                        <p>{lastName}</p>
                    </div>
                </div>
                <div>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Items;
