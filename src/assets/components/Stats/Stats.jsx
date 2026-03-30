import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto bg-linear-to-r from-indigo-600 to-purple-500'>
            <div className='p-16 flex justify-around items-center'>
                <div>
                    <h1 className='text-white text-6xl font-extrabold'>50K+</h1>
                    <p className='text-white text-2xl font-medium'>Active Users</p>
                    
                </div>
                <div className='w-px h-20 bg-white'></div>
                <div>
                    <h1 className='text-white text-6xl font-extrabold'>200+</h1>
                    <p className='text-white text-2xl font-medium'>Premium Tools</p>
                </div>
                <div className='w-px h-20 bg-white'></div>
                <div>
                    <h1 className='text-white text-6xl font-extrabold'>4.9</h1>
                    <p className='text-white text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;