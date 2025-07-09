import { useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputComponent";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ModalProps {
    open: boolean;
    onClose: () => void
}

// controlled componenet
export function CreateContentModal({open, onClose}: ModalProps) {

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();

    async function addContent() {
        const title = titleRef.current?.value
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/content`, {
            title,
            link
        },{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();
    }

    return <div>
        {open && <div className="w-full h-screen bg-slate-800/60 fixed top-0 left-0 flex items-center justify-center">
            <div className="modal bg-white p-3 rounded-2xl">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer"><CrossIcon /></div>
                </div>
                <div className="w-full">
                    <Input reference={titleRef} placeholder={"Title"}/>
                    <Input reference={linkRef} placeholder={"Link"}/>
                </div>

                <div className="flex justify-between m-2">
                    <Button onClick={addContent} variant="primary" size="sm" text="Submit"/>
                    <Button variant="primary" size="sm" text="Submit"/>
                </div>

            </div>
        </div>}
    </div>
}
