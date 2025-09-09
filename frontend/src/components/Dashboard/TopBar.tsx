import { FiLink, FiPlus } from 'react-icons/fi'
import { CreateContentModal } from '../CreateContentModal'
import { useEffect, useState } from 'react';
import { useContent } from '../../hooks/useContent';


export const TopBar = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const {contents, refreshFeed} = useContent();
    
  

    useEffect(() => {
      console.log(modalOpen);
      if (!modalOpen) {
        refreshFeed();
      }
    }, [modalOpen])


  return <div className='border-b border-stone-200 mt-2 mb-4 px-4 pb-4 '>
    <div className='flex items-center justify-between p-0.5'>
        <div className='text-start'>
            <span className='text-sm font-bold block'>Good morning, Ninad</span>
            <span className='text-xs block text-stone-500'>Tuesday, Sept 3rd 2025</span>
        </div>

        <div className='flex gap-2'>
          <button 
            onClick={() => setModalOpen(true)}
            className='flex items-center gap-1 px-2 py-1.5 text-white text-sm bg-violet-500 rounded
              hover:bg-violet-600 cursor-pointer transition-colors'>
              <FiPlus />
              <span>Add content</span>
          </button>
          <button className='flex items-center gap-2 px-2 py-1.5 text-sm bg-stone-100 rounded
              hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors'>
              <FiLink />
              <span>Share brain</span>
          </button>

          <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
          
        </div>
    </div>
  </div>
}

