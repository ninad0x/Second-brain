import { toYouTubeThumbnail } from "../util"

export const YoutubeEmbed = ({link}: {link: string}) => {
    const data = toYouTubeThumbnail(link)
    
    return <div>
        <a href={data?.link} target="_blank">
            <img 
                className="rounded-xl w-full" src={data?.thumbnail} alt="YouTube Thumbnail">
            </img>
        </a>
    </div>
}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="40" fill="red">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.319-48.659C458.737 64 288 64 288 64S117.263 64 74.664 75.424c-23.532 6.383-42.038 25.009-48.319 48.659C16 167.099 16 256 16 256s0 88.901 10.345 131.917c6.281 23.65 24.787 42.276 48.319 48.659C117.263 448 288 448 288 448s170.737 0 213.336-11.424c23.532-6.383 42.038-25.009 48.319-48.659C560 344.901 560 256 560 256s0-88.901-10.345-131.917zM232 338.5v-165l142 82.5-142 82.5z"/>
</svg> */}
