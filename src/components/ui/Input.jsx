import { cn } from "@/lib/utils"

export default function Input({type, className, ...props}) {
    return (
        <div>
            <input 
                    type={type}
                    className={cn("custom-input", className)}
                    {...props}
                />
        </div>   
    )
}