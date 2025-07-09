import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon";

export function SideBar() {

    return <div className=" bg-white h-screen border-r border-slate-200 min-w-72 left-0 top-0">

        <div className="p-6 flex items-center text-2xl gap-3">
            <img className="text-purple-500" src="/public/brainn.png" width="50" height="50" alt=""/>
            Brainly
        </div>

        <div className="p-6 pt-12 text">
            <SideBarItem icon={<TwitterIcon />} text="Tweets"/>
            <SideBarItem icon={<YoutubeIcon />} text="Videos"/>
        </div>



    </div>

}