import  Sidebar  from "@/components/sidebar";  
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import UnapprovedVideos from "@/components/dashboard/unapproved-videos";
import YourNetwork from "@/components/dashboard/network";
import PendingAccessRequest from "@/components/dashboard/pending-editor-access";
import VideoStats from "@/components/dashboard/videostats";
import StorageStats from "@/components/dashboard/storagestats";


export default function Dashboard() {
    return (
    <div style={{height:"100%"}}>
        <Sidebar/>
        <div style={{marginLeft: 240, marginTop: 60, height: "50%"}}>
            <div style={{display: 'flex', justifyContent: 'center', height: "75%"}}>
                <UnapprovedVideoCard/>
                <YourNetworkCard/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', height: "75%", marginTop: 20}}>
                <VideoStatsCard/>
                <PendingAccessRequestCard/>
                <StorageStatsCard/>
            </div>
        </div>
    </div>
    )
}

function UnapprovedVideoCard() {
    return (
    <Card sx={{width:"70%", height: "100%", margin: 3, marginRight:0}}>
        <UnapprovedVideos/>                              
    </Card>
    )
}

function YourNetworkCard() {
    return (
    <Card sx={{width:"25%", height: "100%", margin: 3}}>
        <YourNetwork/>                                
    </Card>
    )
}

function PendingAccessRequestCard() {
    return (
    <Card sx={{width:"42%", height: "100%", margin: 3}}>
        <PendingAccessRequest/>                              
    </Card>
    )
}

function VideoStatsCard() {
    return (
    <Card sx={{width:"25%", height: "100%", margin: 3, marginRight: 0}}>
        <VideoStats/>                          
    </Card>
    )
}

function StorageStatsCard() {
    return (
    <Card sx={{width:"25%", height: "100%", margin: 3, marginLeft: 0}}>
        <StorageStats/>                               
    </Card>
    )
}