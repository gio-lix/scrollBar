import React from 'react';

const Info = ({
                  name, image,
                  lastName,
                  prefix,
                  title,
                  email,
                  ip,
                  jobArea, jobType,
                  jobDescriptor,
                  company,
                  suffix,
                  city,
                  country,
                  state,
                  streetAddress,
                  zipCode
              }) => {
    return (
        <div className='p-5 flex items-center h-auto  '>
            <div className='w-72 h-52   '>
                <img src={`${image}`} className='w-72 h-52' alt="img"/>
            </div>
            <div className=' grow p-5 relative'>
                <p className='bg-white absolute top-2 left-10'>info</p>
                <div className='border-2 border-black w-full h-full px-4 py-2 text-base '>
                    <div className='flex space-x-3 font-bold mt-1 '>
                        <span>{prefix}</span>
                        <div className='flex space-x-1'>
                            <p> {name}</p>
                            <p>{lastName}</p>
                        </div>
                    </div>
                    <p className='italic'>{title}</p>
                    <div className='flex space-x-3 mt-3'>
                        <span className='underline'>Email:</span>
                        <p>{email}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline'>Ip Address:</span>
                        <p>{ip}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline'>Job Area:</span>
                        <p>{jobArea}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline'>Job Type:</span>
                        <p>{jobType}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline'>Job Descriptor:</span>
                        <p>{jobDescriptor}</p>
                    </div>
                </div>
            </div>
            <div className=' border-2 border-black   w-52  relative '>
                <p className='bg-white absolute -top-4 left-5 '>Address</p>
                <div className=' pb-2 mt-3 px-2 text-base'>
                    <p className='font-bold'>{company}</p>
                    <p className='font-bold'>{suffix}</p>
                    <div className='flex space-x-3'>
                        <span className='underline'>City:</span>
                        <p>{city}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline'>Country:</span>
                        <p>{country}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline'>State:</span>
                        <p>{state}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline whitespace-nowrap'>State Address:</span>
                        <p>{streetAddress}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <span className='underline whitespace-nowrap'>Zip Code:</span>
                        <p>{zipCode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
