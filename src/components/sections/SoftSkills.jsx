import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SoftSkills() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        >
          <strong>SOFT SKILLS</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "80%", fontWeight: "500" }}
          fullWidth
        >
          Self Management, Fast learner, Well Organized and Problem Solver
        </Typography>
      </Stack>
    </Box>
  );
}

export default SoftSkills;
