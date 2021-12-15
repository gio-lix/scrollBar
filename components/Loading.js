import React from 'react';

const Loading = () => {
    return (
        <div className=' h-20 flex justify-center'>
            <div className='loader w-28 mt-5 flex justify-between'>
                <div className='w-5 h-9 bg-green-400 animate-bounce'> </div>
                <div className='w-5 h-9 bg-green-400 animate-bounce'> </div>
                <div className='w-5 h-9 bg-green-400 animate-bounce'> </div>
            </div>
        </div>
    );
};

export default Loading;
