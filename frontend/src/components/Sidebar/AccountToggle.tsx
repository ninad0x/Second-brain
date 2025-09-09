import React from 'react'
import { FiChevronDown } from "react-icons/fi";


export const AccountToggle = () => {
  return <div
    className='border-b mb-4 mt-2 pb-4 border-stone-300'
  >
    <button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors 
        relative gap-2 w-full items-center'>
        <img 
            src="https://api.dicebear.com/9.x/notionists/svg"
            alt="avatar"
            className='size-8 rounded bg-violet-500 shrink-0 shadow'
        />

        <div className='text-start'>
            <span className='text-sm font-bold block'>Ninad</span>
            <span className='text-xs block text-stone-500'>ninad@gmail.com</span>
        </div>

        <FiChevronDown className='absolute right-2'/>

    </button>
  </div>
  
}
