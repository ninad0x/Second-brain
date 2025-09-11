import { TopBar } from './TopBar'
import { StatCards } from './StatCards'
import { useContent } from '../../hooks/useContent';

export const Dashboard2 = () => {

  const {contents, refreshFeed} = useContent();
  
  return (
    <div className='bg-white rounded-lg pb-4 shadow h-[200vh]'>
      <TopBar refreshFeed={refreshFeed}/>
      <StatCards contents={contents}/>
      
    </div>
  )
}