import type { ReactElement } from "react";

interface IconProps {
    text: string;
    icon: ReactElement;
    onClick?: () => void;
}

export function SideBarItem({text, icon}: IconProps) {
    return <div className="flex my-2 text-gray-700 hover:bg-slate-200 rounded-xl cursor-pointer">
        
        <div className="p-2">
            {icon} 
        </div>

        <div className="p-2">
            {text}
        </div>
        
        
        
    </div>
} 