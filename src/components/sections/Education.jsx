import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Experience() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="body2"
        sx={{ width: "100%", fontWeight: "500" }}
        fullWidth
      >
        <strong>EDUCATION</strong>
      </Typography>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="body2" sx={{ width: "20%" }} fullWidth>
          <i>Aug 2018 — Dec 2022</i>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "60%", fontWeight: "500" }}
          fullWidth
        >
          <strong>BSc Information Sciences(IT MAJOR),</strong> The Technical
          University of Kenya
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "20%", textAlign: "right" }}
          fullWidth
        >
          <i>Nairobi</i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="body2" sx={{ width: "20%" }} fullWidth>
          <i>Feb 2014 — Nov 2017</i>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "60%", fontWeight: "500" }}
          fullWidth
        >
          <strong>Kenya Certificate of Secondary Education,</strong> Got Agulu
          Sec School
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "20%", textAlign: "right" }}
          fullWidth
        >
          <i>Siaya</i>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Experience;
