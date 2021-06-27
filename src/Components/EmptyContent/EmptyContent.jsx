import React from 'react'

export const EmptyContent = ({message}) => {
    return (
        <div className='flex items-center justify-center h-screen w-full text-8xl text-white'>
            {message}
        </div>
    )
}
