import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StaticRating from "./StaticRating";

function Review() {
  return (
    <div className="review">
      <Card sx={{ maxWidth: "100%", maxHeight: "50%" }}>
        <CardHeader
            sx={{display: "flex", flexDirection: "row"}}
          avatar={
            <Avatar
              sx={{
                bgcolor: red[500],
              }}
              aria-label="review"
            >
              S
            </Avatar>
          }
          action={<StaticRating />}
          title="Shivansh Verma"
          subheader="Delhi"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Review;
