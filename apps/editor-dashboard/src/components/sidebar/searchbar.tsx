import { InputBase, IconButton, Container } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/router";

export default function Searchbar(){
    const router = useRouter()
    return (
        <Container sx={{
                    display: 'flex',  
                    width: 343,       
                    alignItems: 'center',     
                    gap: 2,
                    flexDirection: 'row',    
                    }}>
            <InputBase
            sx={{ ml: 1, flex: 1, display: {xs: "none", sm:"block"} }}
            placeholder="Type here to Search.."
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={()=>{router.push('/search')}}>
                <SearchIcon />
            </IconButton>
            <img src="avatars/Default Avatar 2.png" 
                style={{
                        cursor: 'pointer',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        objectFit: 'cover', 
                        border: '1px solid #fff', 
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'}} 
                alt="Avatar" 
                onClick={()=>{router.push('/settings')}} />
        </Container>
    )
}