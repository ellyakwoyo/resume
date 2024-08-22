import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TechnicalSkills() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        >
          <strong>TECHNICAL SKILLS</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>PHP</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
        -Laravel, Slim and Yii2 frameworks
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>Golang</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -Gin and Fibre frameworks
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>APIs</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -Restful APIs and GraphQL
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>Databases</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -MySQL, PostgreSQL, MongoDB and SQLite, .
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>Testing</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -PHPUnit and Jest.
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>Agile Methodologies</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -Scrum, Kanban, Jira and Zoho.
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>DevOps</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -Git, Docker and Kubernetes
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Typography
          variant="body2"
          sx={{ width: "10%", fontWeight: "500" }}
          fullWidth
        >
          <strong>AWS</strong>
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }} fullWidth>
          -Set up and secure instances to host applications.
        </Typography>
      </Stack>
    </Box>
  );
}

export default TechnicalSkills;
