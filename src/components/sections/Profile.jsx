import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Profile() {
  return (
    <Box id="profile" sx={{ width: "100%" }}>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          className="title"
          variant="body2"
          sx={{ width: "20%" }}
          fullWidth
        >
          <b>PROFILE</b>
        </Typography>
        <Typography
          className="content"
          variant="body2"
          sx={{ width: "80%" }}
          fullWidth
        >
          With 3+ years of experience as a backend developer, i build
          scalable, robust and maintainable production software aided by prototypes and Minimum Viable Products(MVP).
          Skilled in Golang(Gin), PHP(laravel), DevOps, CI/CD, cloud hosting(AWS) and  external services integration, i accomplish project milestones on time.
          I am always passionate about delivering quality software by adopting new skills, being a team player and paying attention to detail.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Profile;
