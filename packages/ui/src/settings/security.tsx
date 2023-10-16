import { Container, Typography, InputBase, Button } from "@mui/material";

export default function Security() {
  return (
    <Container sx={{ marginLeft: "-20px" }}>
      <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
        Current Password <span style={{ color: "red" }}>*</span>
      </Typography>
      <InputBase
        defaultValue={"abcdef"}
        type={"password"}
        sx={{
          input: {
            border: "1px solid rgba(0, 0, 0, 0.2)",
            paddingLeft: "20px",
            borderRadius: 20,
            height: 30,
            width: 350,
          },
          marginBottom: "20px",
        }}
      />
      <Typography sx={{ marginBottom: "10px" }}>
        New Password <span style={{ color: "red" }}>*</span>
      </Typography>
      <InputBase
        type={"password"}
        sx={{
          input: {
            border: "1px solid rgba(0, 0, 0, 0.2)",
            paddingLeft: "20px",
            borderRadius: 20,
            height: 30,
            width: 350,
          },
          marginBottom: "20px",
        }}
      />
      <Typography sx={{ marginBottom: "10px" }}>
        Confirm Password <span style={{ color: "red" }}>*</span>
      </Typography>
      <InputBase
        type={"password"}
        sx={{
          input: {
            border: "1px solid rgba(0, 0, 0, 0.2)",
            paddingLeft: "20px",
            borderRadius: 20,
            height: 30,
            width: 350,
          },
        }}
      />
      <div>
        <Button
          variant={"contained"}
          sx={{
            marginLeft: "90px",
            marginTop: "25px",
            color: "#FFFFFF",
            backgroundColor: "#636E72",
            "&:hover": {
              color: "#FFFFFF",
              backgroundColor: "#404040",
              borderColor: "#0062cc",
              boxShadow: "none",
            },
          }}
        >
          Change Password
        </Button>
      </div>
    </Container>
  );
}
