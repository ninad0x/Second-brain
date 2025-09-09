import '../App.css'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useEffect, useState } from 'react'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'


export function Dashboard() {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const {contents, refreshFeed} = useContent();

  async function shareBrain() {
    const response = await axios.post(`${BACKEND_URL}/brain/share`,{
      share: true,
    }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });

    
    console.log(response.data.message);
    navigator.clipboard.writeText(`${BACKEND_URL}/brain/${response.data.message}`)
    alert("Link copied!")
    
  }

  useEffect(() => {
    console.log(modalOpen);
    if (!modalOpen) {
      refreshFeed();
    }
  }, [modalOpen])



  return <div className='dashboard flex '>
    {/* <SideBar /> */}
    <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

    <div className='content bg-amber-300 p-4 h-screen w-full'>
      <div className='buttons flex gap-4 justify-end mb-8'>
        <Button onClick={() => setModalOpen(true)} startIcon={<PlusIcon />} variant="primary" text="Add content" size='sm'/>  
        <Button onClick={shareBrain} startIcon={<ShareIcon />} variant="secondary" text="Share Brain" size='sm'/>
      </div>
  
      <div className='flex gap-4 flex-wrap'>
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='youtube' title='First video' link="https://www.youtube.com/embed/fG0K3wx64QY"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='youtube' title='First video' link="https://www.youtube.com/embed/fG0K3wx64QY"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
        <Card type='twitter' title='First Tweet' link="933354946111705097"/>  

        {contents.map(
          ({title, type, link, index}) => <Card
          key={index} 
          type={type} 
          title={title} 
          link={link}/>)
        }

      </div> 
  </div>



  </div>
  
}

