import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const data = [
    { id: "1", name: "Students" },
    { id: "2", name: "Teachers" },
  ];

  return (
    <div className="Home">
      <Typography
        onClick={() => navigate("/")}
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center", cursor: "pointer" }}
      >
        Welcome to Admin Portal
      </Typography>
      <div className="homeCardDiv">
        {data.map((data) => (
          <MyCard data={data.name} key={data.id} />
        ))}
      </div>
    </div>
  );
}

function MyCard({ data, id }) {
  const navigate = useNavigate();
  return (
    <button className="my-card" onClick={() => navigate(`/${data}`)}>
      {data}
    </button>
  );
}
export default Home;
