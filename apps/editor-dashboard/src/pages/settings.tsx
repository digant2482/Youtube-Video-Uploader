import Sidebar from "@/components/sidebar";
import { Card } from "@mui/material";
import { Settings } from "ui";

export default function EditorSettings() {
  return (
    <div style={{ height: "100%" }}>
      <Sidebar />
      <div style={{ marginLeft: 240, marginTop: 80, height: "82%" }}>
        <Card sx={{ width: "95.5%", height: "100%", margin: 3 }}>
          <Settings/>
        </Card>
      </div>
    </div>
  );
}
