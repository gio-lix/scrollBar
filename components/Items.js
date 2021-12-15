import React from 'react';

const Items = ({id, name, imageUrl, lastName, prefix, title, handleClick}) => {

    return (
        <div onClick={() => handleClick(id)} className=' w-full aspect-[5/4] border border-black p-1 cursor-pointer '>
            <div>
                <img src={imageUrl} className='w-full h-full' alt="img"/>
                {/*<Image className='object-center' src={imageUrl} layout='responsive' width={200} height={130} alt={name} />*/}
            </div>
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
