import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function VideoStats() {
  const router = useRouter();

  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ marginLeft: 10 }}>
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
          onClick={() => router.push("/mynetwork")}
        >
          Video Stats
        </Button>
      </div>
      <div>
        <PieChart
          data={[
            { title: "Unapproved", value: 10, color: "#646464" },
            { title: "Approved", value: 15, color: "#414141" },
          ]}
          radius={30}
          center={[50, 33]}
          animate={true}
          label={({ dataEntry }) => `${dataEntry.value}`}
          labelPosition={50}
          labelStyle={{ fontSize: "7px" }}
          style={{ marginBottom: -110 }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant={"body2"}
            sx={{ marginLeft: "2px", color: "#F5F5F5" }}
          >
            <span
              style={{
                backgroundColor: "#414141",
                padding: "3px",
                borderRadius: 10,
              }}
            >
              Approved
            </span>
          </Typography>
          <Typography
            variant={"body2"}
            sx={{ marginRight: "2px", color: "#F5F5F5" }}
          >
            <span
              style={{
                backgroundColor: "#646464",
                padding: "3px",
                borderRadius: 10,
              }}
            >
              Unapproved
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
