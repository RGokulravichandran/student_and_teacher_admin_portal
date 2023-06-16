import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import HomeIcon from "@mui/icons-material/Home";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => navigate("/")}>
            <HomeIcon />
            <Typography> Home</Typography>
          </IconButton>
          <IconButton onClick={() => navigate("/Teachers")}>
            <RecordVoiceOverIcon />
            <Typography> Teacher</Typography>
          </IconButton>
          <IconButton onClick={() => navigate("/Students")}>
            <LocalLibraryIcon />
            <Typography> Students</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
