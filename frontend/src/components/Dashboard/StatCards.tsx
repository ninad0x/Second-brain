// import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const StatCards = () => {
  // return <div className='col-span-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr)))] gap-3 statcard w-full'>
  return <div className='col-span-12 grid grid-cols-[repeat(auto-fit,minmax(300px,300px)))] gap-4  statcard w-full'>

    browser - https://www.youtube.com/watch?v=eu0UjsnZ17s
    share - https://youtu.be/eu0UjsnZ17s?feature=shared

    <Card title='Trial video' link='https://www.youtube.com/watch?v=3EarZzPwTEg' type='youtube'/>
    <Card type='twitter' title='First Tweet' link="933354946111705097"/>  
    <Card title='Trial video' link='0' type='youtube'/>


     
    </div>
}

interface cardProps {
  title: string;
  link: string; 
  type?: "twitter" | "youtube";

}

const Card = ({title, link, type}: cardProps) => {
  return <div className='p-4 bg-white border border-stone-300 rounded-md hover:shadow-lg transition-shadow'>
    <div className='flex flex-col mb-8 justify-between'>
      <div>
        <h3 className='text-stone-500 mb-2 text-sm'>{title}</h3>
        {/* <p className='text-3xl font-semibold'>{type}</p> */}
          <div className=''>
            {type === "youtube"
                ? <iframe className="w-full p-2 pt-8" src={'www.youtube.com/watch?v=eu0UjsnZ17s'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                : <TwitterTweetEmbed tweetId={link} />
            }
        </div>
      </div>

    </div>
  </div>
}