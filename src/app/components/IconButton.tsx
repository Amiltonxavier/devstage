import React, { ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> { }

export function IconButton(props: IconButtonProps) {
    return (
        <button
            type='button'
            className='p-1.5 bg-gray-500 text-blue rounded-xl font-heading cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300'
            {...props}
        />


    )
}
