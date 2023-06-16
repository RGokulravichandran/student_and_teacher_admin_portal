import React, { useEffect, useState } from "react";
import { Sform } from "./DialogBox";
import { API_URL } from "../Global";
import MediaCard from "./ProfileCards";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

function Students() {
  const [studentsData, setStudentsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}`)
        .then((res) => res.json())
        .then((sData) =>
          setStudentsData(sData.filter((data) => data.type === "student"))
        );
      setLoading(false);
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };
  const DeleteStudent = async (id) => {
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
    <div className="Students">
      <Sform />
      {studentsData.map((sData) => (
        <MediaCard
          key={sData.id}
          data={sData}
          deleteButton={
            <IconButton
              sx={{ color: "red" }}
              onClick={() => DeleteStudent(sData.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

export default Students;
