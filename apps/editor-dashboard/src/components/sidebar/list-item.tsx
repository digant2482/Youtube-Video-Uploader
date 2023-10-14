import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type CustomListItemType = {
    text: string,
    icon: React.JSX.Element,
    action: () => void
}

export default function CustomListItem(props: CustomListItemType){
    return (
      <ListItem key={props.text} disablePadding>
        <ListItemButton onClick={props.action}>
          <ListItemIcon>
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      </ListItem>
    ) 
}