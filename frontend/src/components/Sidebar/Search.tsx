"use client"

import { useState } from 'react'
import { FiCommand, FiSearch } from 'react-icons/fi'
import { CommandMenu } from './CommandMenu'

export const Search = () => {

  const [open, setOpen] = useState(false)

  return <>
        <div className='bg-stone-200 mb-4 rounded flex items-center px-2 py-1.5 text-sm'>
            <FiSearch className='mr-2'/>
            <input
                onFocus={(e) => {
                    e.target.blur()
                    setOpen(true)
                }} 
                type='text' placeholder='Search'
                className='focus:outline-none w-full placeholder:text-stone-400 bg-transparent'    
            />

            <span className='p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5'>
                <FiCommand />K
            </span>
        </div>

        <CommandMenu open={open} setOpen={setOpen} />
        

    </>
}
