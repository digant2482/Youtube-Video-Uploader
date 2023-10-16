import { Card, InputBase, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

export default function EmailSearch() {
  const router = useRouter();
  return (
    <Card
      sx={{
        display: "flex",
        width: "80%",
        alignItems: "center",
        gap: 2,
        flexDirection: "row",
        margin: 10,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by email address or youtube channel..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginRight: "10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#636E72",
            "&:hover": {
              color: "#FFFFFF",
              backgroundColor: "#404040",
              borderColor: "#0062cc",
              boxShadow: "none",
            },
          }}
          onClick={
            () => router.push("/mynetwork") /* Add email search logic here */
          }
        >
          Add User
        </Button>
      </div>
    </Card>
  );
}
