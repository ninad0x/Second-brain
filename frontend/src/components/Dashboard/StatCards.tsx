// import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import { useContent } from '../../hooks/useContent';
import { YoutubeEmbed } from '../YoutubeEmbed';
import { XEmbed } from 'react-social-media-embed';

// import { formatYoutubeURL } from '../../util';

export const StatCards = () => {

  const {contents, refreshFeed} = useContent();

  
  
  // return <div className='col-span-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr)))] gap-3 statcard w-full'>
  return <div className='col-span-12 grid grid-cols-[repeat(auto-fit,minmax(300px,300px)))] gap-4  statcard w-full'>

    <Card title='Trial video' link='https://www.youtube.com/embed/iPWkjepo2Bc' type='youtube'/>
    <Card title='Trial video' link='https://youtu.be/Nt-AsZh5woE?feature=shared' type='youtube'/>
    <Card type='twitter' title='First Tweet' link="https://x.com/imVkohli/status/1941896322342387962"/>
    {/* <Card type='twitter' title='First Tweet' link="https://x.com/FlutterDev/status/1965498424599453894"/> */}
    {/* <Card type='twitter' title='First Tweet' link="https://x.com/NASA/status/1964688048483963110"/> */}
    {/* <Card title='Trial video' link='https://www.youtube.com/embed/iPWkjepo2Bc' type='youtube'/> */}
    
    {/* {contents.map((e) => <Card link={e.}/>)} */}
    {contents.map(
              ({title, type, link, index}) => <Card
              key={index} 
              type={type} 
              title={title} 
              link={link}/>)
            }
     
    </div>
}

interface cardProps {
  title: string;
  link: string; 
  type?: "twitter" | "youtube";

}

const Card = ({title, link, type}: cardProps) => {
  return <div className='p-4 h-max bg-white border border-stone-300 rounded-md hover:shadow-lg transition-shadow'>
    <div className='flex flex-col mb-8 justify-between'>

      <h3 className='text-stone-500 mb-2 text-sm'>{title}</h3>

      <div className='flex justify-center '>
        {type === "youtube"
            ? <YoutubeEmbed link={link}/>
            : <div className='rounded-xl border-b border-stone-300'>
                <XEmbed className='w-full h-[200px] cursor-pointer' url={link} />
              </div>
        }
      </div>


    </div>
  </div>
}