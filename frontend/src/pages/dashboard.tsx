import '../App.css'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);

  const contents = useContent();

  return <div className='main flex'>
    <SideBar />
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>  
        <div className='p-4 bg-slate-200 h-screen w-full'>
          <div className='buttons flex gap-4 justify-end mb-8'>
            <Button onClick={() => setModalOpen(true)} startIcon={<PlusIcon />} variant="primary" text="Add content" size='sm'/>  
            <Button startIcon={<ShareIcon />} variant="secondary" text="Share Brain" size='sm'/>
          </div>
      
          <div className='flex gap-4'>
            <Card type='youtube' title='First video' link="https://www.youtube.com/embed/Nd6yqH2GFWU?si=GAXVfjHLimgDA6K2"/>  
            <Card type='twitter' title='First Tweet' link="933354946111705097"/>  

            {contents.map(
              ({title, type, link}) => <Card 
              type={type} 
              title={title} 
              link={link}/>)
            }

          </div> 
      </div>



  </div>
  
}

