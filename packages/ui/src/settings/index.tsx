import { Container, Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import General from "./general";
import Security from "./security";

export function Settings() {
  const [alignment, setAlignment] = React.useState("General");
  return (
    <Container sx={{ marginTop: "30px", marginLeft: "8px" }}>
      <ToggleButtonGroup
        color={"primary"}
        value={alignment}
        exclusive
        onChange={(
          event: React.MouseEvent<HTMLElement>,
          newAlignment: string
        ) => {
          setAlignment(newAlignment);
        }}
        aria-label="Platform"
      >
        <ToggleButton     sx={{
      backgroundColor: alignment === 'option1' ? 'darkblue' : 'lightblue',
      color: alignment === 'option1' ? 'lightblue' : 'darkblue',
      borderRadius: '10px',
    }}
value="General">General</ToggleButton>
        <ToggleButton value="Security">Security</ToggleButton>
      </ToggleButtonGroup>
      <Divider sx={{ width: "380px" }} />
      {alignment === "General" && <General />}
      {alignment === "Security" && <Security />}
    </Container>
  );
}