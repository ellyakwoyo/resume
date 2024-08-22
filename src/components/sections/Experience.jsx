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
        <strong> EMPLOYMENT HISTORY</strong>
      </Typography>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        >
          <i> August 2023 — Present </i>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "60%", fontWeight: "500" }}
          fullWidth
        >
          <b>Software Developer, </b> <i>Software Technologies Limited</i>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "20%", textAlign: "right", fontWeight: "500" }}
          fullWidth
        >
          <i>Nairobi</i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body31"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Box sx={{ width: "60%" }}>
          <ul>
            <li>
              <Typography variant="body2" fullWidth>
                Implimented AISearch on eBoardadmin which enhances documment
                search and generate response based on search request.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Reduced bugs reported by over 30% using Test Driven Development.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Implimented agile methodology(Scrum) using Zoho which increased
                team productivity by a remarkable 60%
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Refactored the entire for eboardadmin API codebase with the assit of
                PHPunit which later improved codebase adaptability and bugs
                detection.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Implemented the CI/CD pipeline for eParliament which reduced
                direct server interaction by 90%.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Implementing New features as per User Requirement report.
              </Typography>
            </li>
          </ul>

          <Typography
            variant="h6"
            sx={{ width: "20%", textAlign: "right" }}
            fullWidth
          ></Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        >
          <i> Jan 2021 — August 2023 </i>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "60%", fontWeight: "500" }}
          fullWidth
        >
          <b>Software Developer & Tutor, </b> <i>Course Hero</i>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "20%", textAlign: "right", fontWeight: "500" }}
          fullWidth
        >
          <i>Remote</i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body31"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        ></Typography>
        <Box sx={{ width: "60%" }}>
          <ul>
            <li>
              <Typography variant="body2" fullWidth>
                Assisted students in understanding agile methodology which
                earned me a helpful rate of 90%
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Developed and delivered assigned projects on time.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Collaborated well with students by allowing them access code
                snippets they needed through github while working on object
                oriented programming.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Explained API develpment using PHP laravel.
              </Typography>
            </li>
          </ul>

          <Typography
            variant="h6"
            sx={{ width: "20%", textAlign: "right" }}
            fullWidth
          ></Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Experience;
