import CustomListItem from "./list-item";
import { List, Toolbar, Divider } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';

export default function CustomDrawer(){
    const router = useRouter();
    return (
        <div>
        <Toolbar>
            <img 
              src="logos/VideoAuth Sidebar.png" 
              height={40}  alt=""
              style={{ cursor: 'pointer' }} 
              onClick={()=>{router.push('/dashboard')}}
            />
        </Toolbar>
        <List sx={{padding:1.5}}>
          <CustomListItem text={"Dashboard"} icon={<SpaceDashboardIcon/>} action={()=>{router.push('/dashboard')}}/>
          <CustomListItem text={"My Network"} icon={<GroupIcon/>} action={()=>{router.push('/mynetwork')}}/>
          <CustomListItem text={"Add Youtuber"} icon={<GroupAddIcon/>} action={()=>{router.push('/addyoutuber')}}/>
          <CustomListItem text={"Upload Video"} icon={<UploadFileIcon/>} action={()=>{router.push('/uploadvideo')}}/>
        </List>
        <List sx={{padding:1}}>
          <CustomListItem text={"Settings"} icon={<SettingsIcon/>} action={()=>{router.push('/settings')}}/>
          <CustomListItem text={"Logout"} icon={<LogoutIcon/>} action={()=>{router.push('/logout')}}/>
        </List>
      </div>
    ) 
}