"use client";

import { useEffect, useState } from "react";
import { UploadIcon } from "../icons";
import Input from "./Input";

const CustomFileInput = ({name, required, defaultValue}) => {
    const [fileName, setFileName] = useState("No file chosen.");

    const handleFileChange = (event) => {
        const nameFile = event.target.value.split("\\").pop();
        setFileName(nameFile || "No file chosen.")
    }

    useEffect(() => {
        if(defaultValue){
            const parts = defaultValue.split("/");
            setFileName(parts[parts.length-1])
        }
    }, [defaultValue])

    return (
        <div className="grid grid-cols-2 gap-2 items-center">
            <Input name={name} type="file" required={required} className="sr-only" id="fileInput" onChange={handleFileChange}/>
            <label htmlFor="fileInput" className="h-6custom-input px-4 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
                choose File
            </label>
            <UploadIcon/>
            <span className="ml-3 text-gray-600 truncate">{fileName}</span>
        </div>
    )
}

export default CustomFileInput;
