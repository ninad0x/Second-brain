// import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import { FiShare2, FiX } from 'react-icons/fi';
import type { Content } from '../../hooks/useContent';
import { YoutubeEmbed } from '../YoutubeEmbed';
import { XEmbed } from 'react-social-media-embed';
import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';


export const StatCards = ({ contents }:{ contents: Content[] }) => {

  return <div className='px-4 col-span-12 grid grid-cols-[repeat(auto-fit,minmax(300px,300px)))] gap-4  statcard w-full'>

    {/* dummy data */}
    <Card _id='1' title='Trial video' link='https://www.youtube.com/embed/iPWkjepo2Bc' type='youtube'/>
    <Card _id='1' title='Trial video' link='https://youtu.be/Nt-AsZh5woE?feature=shared' type='youtube'/>
    <Card _id='1' type='twitter' title='First Tweet' link="https://x.com/imVkohli/status/1941896322342387962"/>
    
    {contents.map(
        ({_id ,title, type, link}) => <Card
        _id={_id}
        key={_id}
        type={type} 
        title={title} 
        link={link}/>)
    }

    </div>
}

export const Card = ({_id, title, link, type}: Content) => {

  const [isDeleted, setIsDeleted] = useState(false);

  async function deleteContent(id:string) {

    await axios.post(`${BACKEND_URL}/delete`, {
      contentId: id
    },{
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    console.log("item deleted");
    
  }

  return <div className='p-5 h-max bg-white border border-stone-300 rounded-md hover:shadow-lg transition-shadow'>
    <div className='flex flex-col mb-8 justify-between'>

    <div className=" flex justify-between text-stone-500 mb-5 text-md">

        <h3>{title}</h3>

        <div className="flex gap-2 items-center">
            <FiShare2 className='size-[24px] p-1 hover:bg-stone-200 rounded-xl cursor-pointer'/>
            <FiX className='size-7 p-1 hover:bg-stone-200 rounded-2xl cursor-pointer'onClick={() => setIsDeleted(true)} />
        </div>
    </div>

    { isDeleted
      ? <div className='shadow-md flex flex-col text-center rounded-md border border-dashed border-stone-500 p-3'>Delete this item ?
        <div className='flex justify-between mt-4'>
          <button className='cursor-pointer hover:shadow px-6 py-1.5 text-center rounded-lg bg-green-200' onClick={() => deleteContent(_id)}>Yes</button>
          <button className='cursor-pointer hover:shadow px-6 py-1.5 text-center rounded-lg bg-red-200' onClick={() => setIsDeleted(false)} >Cancel</button>
        </div>
      </div>
      : <div className='content flex justify-center '>
        {type === "youtube"
            ? <YoutubeEmbed link={link}/>
            : <div className='rounded-xl border-b border-stone-300 w-full'>
                <XEmbed className='h-[200px] cursor-pointer rounded-xl' url={link} />
              </div>
        }
      </div>
    }


    </div>
  </div>
}