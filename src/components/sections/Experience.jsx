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
                Reduced bugs reported by over 30% using Test Driven Development.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Behavior Driven Development approaches in writing, developing,
                testing and debugging codes.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Integrated different external services and requirements to meet
                the specific user needs.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Increased rate for generating reports efficiently after
                redesigning and refactoring monolith application to generate
                reports using the latest services.
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
                I ensured that the company network was secure by quarantining
                the suspicious emails.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Ensured that printers and other electronics like CCTV cameras
                were up and working with time maintenance.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Responded to staff request when needed.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fullWidth>
                Developed a policy in microsoft azure for MFA to ensure that ISO
                27001 (ISMS) was complied with.
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
