import { useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputComponent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { AnimatePresence, motion } from "motion/react"

interface ModalProps {
    open: boolean;
    onClose: () => void
}

// controlled componenet
export function CreateContentModal({open, onClose}: ModalProps) {

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const typeRef = useRef<HTMLInputElement>();

    async function addContent() {

        console.log("function called");
        
        const title = titleRef.current?.value
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;
        
        // format youtube URL
        // const newLink = link?.replace("watch?v=", "embed/").replace("youtu.be","youtube").replace("?si","")

        // https://youtu.be/_P2sM9wQuys?si=fGJxJ5rI0mMHrxsI
        // https://youtube/_P2sM9wQuys=CIyLNmqOc-E3v2wN

        await axios.post(`${BACKEND_URL}/content`, {
            title,
            link,
            type
        },{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();
    }

    return <div>
        <AnimatePresence>
        {open && <div onClick={onClose} className="w-full h-screen bg-slate-800/60 fixed top-0 left-0 flex items-center justify-center">
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: 'blur(10px)'
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                }}
                exit={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)"
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeInOut"
                }}
                
                onClick={(e) => e.stopPropagation()} className="modal w-[400px] bg-white p-4 rounded-2xl">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer"><CrossIcon /></div>
                </div>
                <div className="w-full">
                    <Input reference={titleRef} placeholder={"Title"}/>
                    <Input reference={linkRef} placeholder={"Link"}/>
                    <Input reference={typeRef} placeholder={"Type"}/>
                </div>

                <p>Type</p>


                <div className="flex justify-between mt-2">
                    <Button onClick={addContent} variant="primary" size="sm" text="Submit"/>
                </div>


            </motion.div>

        </div>}
        </AnimatePresence>
    </div>
}
