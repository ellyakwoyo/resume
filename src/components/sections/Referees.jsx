import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Referees() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row"  spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="body2" sx={{width: "20%", fontWeight:"500"}} fullWidth>
          <b>REFEREES</b>
        </Typography>
        <Typography variant="body2" sx={{width: "80%"}} fullWidth>
            I will provide on request.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Referees;
