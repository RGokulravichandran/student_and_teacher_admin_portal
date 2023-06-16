import React, { useEffect, useState } from "react";
import "./styles.css";
import { API_URL } from "../Global";
import MediaCard from "./ProfileCards";
import { Tform } from "./DialogBox";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

function Teachers() {
  const [teachersData, setTeachersData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}`)
        .then((res) => res.json())
        .then((tData) =>
          setTeachersData(tData.filter((data) => data.type === "teacher"))
        );
      setLoading(false);
    } catch (error) {
      console.error("Error during fetching:", error);
    }
  };
  const DeleteTeacher = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error during fetching:", error);
    }
  };
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="Teachers">
      <Tform id={"t"} />
      {teachersData.map((tData) => (
        <MediaCard
          data={tData}
          key={tData.id}
          id="t"
          deleteButton={
            <IconButton
              sx={{ color: "red" }}
              onClick={() => DeleteTeacher(tData.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

export default Teachers;
