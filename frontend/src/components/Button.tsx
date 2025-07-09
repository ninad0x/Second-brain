import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text?: string;
    startIcon?: ReactElement;
    endIcon?: string;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const defaultStyles = "px-4 py-2 rounded-lg flex justify-center cursor-pointer items-center";

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600 hover:bg-slate-300"
}

const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} disabled={props.loading}
    className={`
        ${variantClasses[props.variant]}
        ${sizeStyles[props.size]}
        ${defaultStyles}
        ${props.fullWidth ? "w-full" : ""}
        ${props.loading ? "opacity-60" : "hover:bg-purple-700"}
        `}
        >
            <div className="">{props.startIcon}</div>
            {props.text}
            {props.endIcon}
    </button>
}