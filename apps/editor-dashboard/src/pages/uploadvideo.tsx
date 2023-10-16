import Sidebar from "@/components/sidebar";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileUpload from "@/components/fileupload";

const supportedMimeTypes = [
  "video/quicktime",
  "video/mpeg",
  "video/mpeg",
  "video/mp4",
  "video/mp4",
  "video/mpeg",
  "video/x-msvideo",
  "video/x-ms-wmv",
  "video/mpeg",
  "video/x-flv",
  "video/3gpp",
  "video/webm",
  "video/x-dnxhr",
  "video/x-prores",
  "video/x-cineform",
  "video/h265",
];

export default function UploadVideo() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     if (event.target.files[0]) {
  //         if (isVideoFile(event.target.files[0])) {
  //             const file = event.target.files[0];
  //         }
  //     }

  // };

  const handleUpload = () => {};
  return (
    <div style={{ height: "100%" }}>
      <Sidebar />
      <div style={{ marginLeft: 240, marginTop: 80, height: "82%" }}>
        <Card sx={{ width: "95.5%", height: "100%", margin: 3 }}>
          <FileUpload />
          <Button
            onClick={(event) => {}}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Video
            <VisuallyHiddenInput type="file" onClick={handleUpload} />
          </Button>
        </Card>
      </div>
    </div>
  );
}

// function isVideoFile(file: ) {
//     return supportedMimeTypes.includes(file.type);
// }
