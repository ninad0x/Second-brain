import { useRef } from 'react';
import '../App.css'
import { Button } from "../components/Button";
import { Input } from '../components/InputComponent';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export function Signup() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        
        console.log(BACKEND_URL);
        console.log(username, password);
        

        await axios.post(`${BACKEND_URL}/signup`, {
            username,
            password
        })
        alert("You have signed Up")
        navigate("/signin");

    }

    return <div className="h-screen w-full bg-gray-200 flex items-center justify-center">
        <div className="bg-white min-w-44 p-8 rounded-xl">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />

            <div className="flex justify-center mt-5">
                <Button onClick={signup} loading={false} variant="primary" size="md" text="SignUp" fullWidth={true}/>
            </div>
        </div>
    </div>
}