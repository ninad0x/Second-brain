import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon";

export function SideBar() {

    return <div className="fixed bg-red-400 h-[100dvh] border-r border-slate-200 min-w-72">

        <div className="p-6 flex items-center text-2xl gap-3">
            <img className="text-purple-500" src="/brainn.png" width="50" height="50" alt=""/>
            Brainly
        </div>

        <div className="p-6 pt-12 text">
            <SideBarItem icon={<TwitterIcon />} text="Tweets"/>
            <SideBarItem icon={<YoutubeIcon />} text="Videos"/>
        </div>



    </div>

}