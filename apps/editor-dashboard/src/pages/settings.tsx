import  Sidebar  from "@/components/sidebar";  
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

export default function Settings() {
    return (
    <div style={{height:"100%"}}>
        <Sidebar/>
        <div style={{marginLeft: 240, marginTop: 80, height: "50%"}}>
            <Card sx={{width:"40%", height: "100%", margin: 3}}>
                <Typography>Settings</Typography>                                
            </Card>
        </div>
    </div>
    )
}