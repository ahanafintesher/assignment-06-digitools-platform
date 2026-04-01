import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='bg-linear-to-r from-indigo-600 to-purple-500 rounded-xl'>
                <div className='p-8 lg:p-16 flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0'>
                    
                    <div className='text-center'>
                        <h1 className='text-white text-4xl lg:text-6xl font-extrabold'>50K+</h1>
                        <p className='text-white text-lg lg:text-2xl font-medium'>Active Users</p>
                    </div>

                    <div className='w-20 h-px lg:w-px lg:h-20 bg-white opacity-50'></div>

                    <div className='text-center'>
                        <h1 className='text-white text-4xl lg:text-6xl font-extrabold'>200+</h1>
                        <p className='text-white text-lg lg:text-2xl font-medium'>Premium Tools</p>
                    </div>

                    <div className='w-20 h-px lg:w-px lg:h-20 bg-white opacity-50'></div>

                    <div className='text-center'>
                        <h1 className='text-white text-4xl lg:text-6xl font-extrabold'>4.9</h1>
                        <p className='text-white text-lg lg:text-2xl font-medium'>Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;