import { ShareIcon } from "../icons/ShareIcon";
import { TwitterTweetEmbed } from "react-twitter-embed";

interface CardProps {
    title: string;
    link?: string;
    type?: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {
    return <div className="cursor-pointer min-w-72 bg-white rounded-xl border border-gray-200 p-4 max-w-96">
        <div className="main flex justify-between p-2">

            <div className="flex gap-4 items-center text-md text-gray-700">
                <ShareIcon />
                <p>{title}</p>
            </div>
            <div className="flex gap-5 items-center text-gray-700">
                <ShareIcon />
                <ShareIcon />
            </div>
        </div>

        {/* body */}
        <div>
            {type === "youtube"
                ? <iframe className="w-full p-2 pt-8" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                : <TwitterTweetEmbed tweetId={link as string} />
            }
            

        </div>
    </div>
}