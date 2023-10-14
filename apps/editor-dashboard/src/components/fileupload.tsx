import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function FileUpload() {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);    

    return (
        <div
        onDragEnter={(event)=>{
            event.preventDefault();
            setIsDragging(true);
        }}
        onDragOver={(event)=>{
            event.preventDefault();
        }}
        onDragLeave={(event)=>{
            event.preventDefault();
            setIsDragging(false);
        }}
        onDrop={async (event)=>{
            event.preventDefault();
            setIsUploading(true);
            setIsDragging(false);
            const files = await event.dataTransfer.files;
            console.log(files)
            setIsUploading(false);
            //S3 Logic here

        }}
        style={{
            border: `2px dashed ${isDragging ? 'green' : 'gray'}`,
            padding: '20px',
            textAlign: 'center',
        }}
        >

        {isUploading ? <CircularProgress/> :(isDragging ? 'Drop the files here' : 'Drag and drop files here')}
        </div>
    );
}