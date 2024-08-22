import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

/**MUI componenst */
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

/**App Components */
import Name from "./sections/Name";
import Profile from "./sections/Profile";
import TechnicalSkills from "./sections/TechnicalSkills";
import SoftSkills from "./sections/SoftSkills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Intrests from "./sections/Intrest";
import Refrees from "./sections/Referees";

function Resume() {
  const componentRef = useRef();
  const getPageMargins = () => {
    const marginTop = "20px";
    const marginRight = "20px";
    const marginBottom = "20px";
    const marginLeft = "20px";
    return `@page { 
      margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; 
      body {
        font-size: 10px; /* Adjusted font size */
        font-family: "Times New Roman", Times, serif;
        line-height: 1.4; /* Adjusted line height for tighter spacing */
      }
      
    }`;
  };

  
  

  return (
    <>
      <div className="test"></div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ maxWidth: "100%"}}
        my={4}
        gap={4}
        p={2}
      >
        <Box sx={{ textAlign: "left" }}>
          <i>my cv</i>
        </Box>
        <ReactToPrint
          trigger={() => <Button variant="contained">Print</Button>}
          content={() => componentRef.current}
        />
      </Box>
      <Box
        minHeight={"100vh"}
        maxWidth={"100vw"}
        my={4}
        gap={4}
        p={2}
        ref={componentRef}
        
      >
        <style>{getPageMargins()}</style>

        <Stack id="resume" spacing={1}>
          <Name />
          <Divider />
          <Profile />
          <Divider />
          <TechnicalSkills />
          <Divider />
          <SoftSkills />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Education />
          <Divider />
          <Intrests />
          <Divider />
          <Refrees />
        </Stack>
      </Box>
    </>
  );
}

export default Resume;
