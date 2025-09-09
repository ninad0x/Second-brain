
import type { IconType } from 'react-icons';
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi';

export const RouteSelect = () => {
  return (
    <div className='space-y-1'>
        <Route Icon={FiHome} selected={true} title='Dashboard'/>
        <Route Icon={FiUsers} selected={false} title='Team'/>
        <Route Icon={FiPaperclip} selected={false} title='Invoice'/>
        <Route Icon={FiLink} selected={false} title='Integration'/>
        <Route Icon={FiDollarSign} selected={false} title='Finance'/>
    </div>
  )
}

interface routeProps {
    selected: boolean;
    Icon: IconType;
    title: string;
}

const Route = ({selected, Icon, title}: routeProps) => {
    return <button className={`flex items-center justify-start w-full gap-2 text-sm rounded px-2 py-1.5 
        ${selected
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }
    `}>
        <Icon className={`${selected ? "text-purple-500" : ""}`}/>
        <span>{title}</span>
    </button>
}
