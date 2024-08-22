import React from "react";
/**MUI component */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Projects() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography
          variant="body2"
          sx={{ width: "20%", fontWeight: "500" }}
          fullWidth
        >
          <strong> NOTABLE PROJECTS</strong>
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: "80%", fontWeight: "500" }}
          fullWidth
        >
          <strong>eBoard Admin(Web and API), </strong> <i>(https://eboardadmin.stl-horizon.com)</i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Box sx={{ width: "60%" }}>
          <ul>
            <li>
              <Typography sx={{ fontWeight: "500" }} variant="body2" fullWidth>
                Web Application API used by corporate board members to create meetings,
                host meetings, share confidential doccuments and communicate(Over 1000 users). PHP(Slim),
                Golang, Docker, Kubernetes, ec2(AWS), MySQL, JUnit, Git and Scrum-Zoho.
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
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Typography
          variant="body2"
          sx={{ width: "80%", fontWeight: "500" }}
          fullWidth
        >
          <b>eParliament(Web and API),</b> <i>(https://www.stl-horizon.com/eparliament)</i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Box sx={{ width: "60%" }}>
          <ul>
            <li>
              <Typography sx={{ fontWeight: "500" }} variant="body2" fullWidth>
                Web Application API that allows the public to send their
                petitions to the parliament and manages house business.
                PHP(Slim), Golang, Docker, ec2(AWS), MySQL, JUnit, Git and
                Scrum-Zoho.
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
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Typography
          variant="body2"
          sx={{ width: "80%", fontWeight: "500" }}
          fullWidth
        >
          <b>eHMRS(API),</b> <i></i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Box sx={{ width: "60%" }}>
          <ul>
            <li>
              <Typography sx={{ fontWeight: "500" }} variant="body2" fullWidth>
                Web Application API that digitizes activities of HR departments.
                PHP(Laravel), Docker, ec2(AWS), MySQL, JUnit, Git and
                Scrum-Zoho.
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
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Typography
          variant="body2"
          sx={{ width: "80%", fontWeight: "500" }}
          fullWidth
        >
          <strong>Saka Fundi Mtaani(Web and API),</strong> <i>(https://sakafundimtaani.com)</i>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
        <Typography variant="h6" sx={{ width: "20%" }} fullWidth></Typography>
        <Box sx={{ width: "60%" }}>
          <ul>
            <li>
              <Typography sx={{ fontWeight: "500" }} variant="body2" fullWidth>
                Web Application and Mbile API that provides an avenue to get casual workers.
                Golang(Gin),GraphQL, Docker, ec2(AWS), PostreSQL, Jest, Git and
                Scrum-Jira.
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

export default Projects;
