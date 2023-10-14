import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function YourNetwork() {
  const router = useRouter();
  const networkData = [
    { name: 'Senthil Rajashekharan', avatarSrc: '/avatars/johndoe.png' },
    { name: 'Jane Smith', avatarSrc: '/avatars/janesmith.png' },
    { name: 'Paresh Limbasiya', avatarSrc: '/avatars/janesmith.png' },
    // Add more data as needed
  ];

  return (
    <div style={{marginTop: 8}}>
      <div style={{marginLeft: 10, marginBottom: 15}}>
        <Button variant="contained" 
          sx={{color: "#FFFFFF",
            backgroundColor: '#636E72',
            '&:hover':  {
            color: "#FFFFFF",
            backgroundColor: '#404040',
            borderColor: '#0062cc',
            boxShadow: 'none',
          }}}
          onClick={()=>router.push('/mynetwork')}>
            Your Network</Button>
      </div>
      {networkData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 16, marginLeft: 10 }}>
          <Avatar alt={item.name} src={item.avatarSrc} />
          <Typography variant="body1" sx={{ marginLeft: 2 }}>
            {item.name}
          </Typography>
        </div>
      ))}
    </div>
  );
}