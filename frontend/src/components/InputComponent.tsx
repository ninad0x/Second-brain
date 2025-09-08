
interface InputProps {
    placeholder: string;
    reference?: any;
    loadThumbnail?: () => void;
}

export function Input({placeholder, reference, loadThumbnail}: InputProps) {
    return <div>
        <input onChange={loadThumbnail} ref={reference} type="text" className="px-4 py-2 border border-slate-200 rounded my-2 w-full" placeholder={placeholder}/>
    </div>
}