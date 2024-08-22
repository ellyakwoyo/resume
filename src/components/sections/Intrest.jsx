import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Interests() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        >
          <b>INTERESTS</b>
        </Typography>
        <Typography variant="body2" sx={{ width: "80%" }} fullWidth>
          Artificial Intelligence, Distributed Systems, Cyber security and
          Micro-Services
        </Typography>
      </Stack>
    </Box>
  );
}

export default Interests;
