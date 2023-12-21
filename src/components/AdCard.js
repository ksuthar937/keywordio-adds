import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ControlledCheckbox from "./ControlledCheckbox";

export default function AdCard({ image, type, checked, handleChange }) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia component="img" height="340" image={image} alt={type} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="body4" color="text.secondary">
            Create
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {type}
          </Typography>
          <ControlledCheckbox checked={checked} handleChange={handleChange} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
