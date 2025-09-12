import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Content {
    _id: string;
    title: string;
    link: string;
    type: string;
    tags?: string[];
    userId?: string;
}

export function useContent() {
    const [contents, setContents] = useState<Content[]>([])

    async function refreshFeed() {
        console.log("refresh called");
        
        await axios.get(`${BACKEND_URL}/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            setContents(response.data.content)
        })
    }

    return { contents, refreshFeed };
}