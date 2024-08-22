import React from "react";

/**MUI components */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Name() {
  return (
    <Box id="name" sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        gutterBottom
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <b>ELLY OPETU AKWOYO</b>
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <i>Software Engineer</i>
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        +254716533839 | ellyopetu@gmail.com
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <a
          style={{ marginLeft: "5px", marginRight: "5px" }}
          href="https://www.linkedin.com/in/elly-opetu-b60986189"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        |
        <a
          style={{ marginLeft: "5px", marginRight: "5px" }}
          href="https://github.com/ellyakwoyo/"
        >
          GitHub
        </a>
        |
        <a
          style={{ marginLeft: "5px", marginRight: "5px" }}
          href="https://gitlab.com/ellyakwoyo"
        >
          GitLab
        </a>
      </Typography>
    </Box>
  );
}

export default Name;
