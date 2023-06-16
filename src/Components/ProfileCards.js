import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { API_URL } from "../Global";
import { Edit } from "./Edit";

export default function MediaCard({ data, id, deleteButton }) {
  if (id == "t") {
    return (
      <Card sx={{ maxWidth: 345, minWidth: 250 }}>
        <CardMedia sx={{ height: 140 }} image={data.pic} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Age: {data.age}
            <br />
            Subject: {data.subject}
            <br />
            Exp: {data.experience}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          {deleteButton}
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 345, minWidth: 250 }}>
        <CardMedia sx={{ height: 140 }} image={data.pic} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Roll Num: {data.rollNum}
            <br />
            Class: {data.class}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => <Edit data={data} />}>
            Edit
          </Button>
          {deleteButton}
        </CardActions>
      </Card>
    );
  }
}
