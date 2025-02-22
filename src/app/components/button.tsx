import React, { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex justify-between items-center px-5 bg-gray-500 h-12 text-blue rounded-xl font-semibold font-heading w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
			{...props}
		/>
	)
}
