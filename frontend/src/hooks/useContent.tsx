import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";


export function useContent() {
    const [contents, setContents] = useState([])

    async function refreshFeed() {
        await axios.get(`${BACKEND_URL}/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            setContents(response.data.content)
        })
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         refreshFeed();
    //     }, 10 * 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }
        
    // }, [])

    return { contents, refreshFeed };
}