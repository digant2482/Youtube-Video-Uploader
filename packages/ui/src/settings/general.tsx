import { Container, Typography, InputBase } from "@mui/material";

export default function General() {
  return (
    <Container sx={{ marginLeft: "-20px" }}>
      <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
        Full name <span style={{ color: "red" }}>*</span>
      </Typography>
      <InputBase
        disabled={true}
        defaultValue={"Digant Patel"}
        sx={{
          input: {
            cursor: "not-allowed",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f0f0f0",
            paddingLeft: "20px",
            borderRadius: 20,
            height: 30,
            width: 350,
          },
          marginBottom: "20px",
        }}
      />
      <Typography sx={{ marginBottom: "10px" }}>
        Email address <span style={{ color: "red" }}>*</span>
      </Typography>
      <InputBase
        disabled={true}
        defaultValue={"digant@course.com"}
        sx={{
          input: {
            cursor: "not-allowed",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f0f0f0",
            paddingLeft: "20px",
            borderRadius: 20,
            height: 30,
            width: 350,
          },
          marginBottom: "20px",
        }}
      />
      <Typography sx={{ marginBottom: "10px" }}>
        Mobile number <span style={{ color: "red" }}>*</span>
      </Typography>
      <InputBase
        disabled={true}
        defaultValue={"8888888888"}
        sx={{
          input: {
            cursor: "not-allowed",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f0f0f0",
            paddingLeft: "20px",
            borderRadius: 20,
            height: 30,
            width: 350,
          },
        }}
      />
    </Container>
  );
}
