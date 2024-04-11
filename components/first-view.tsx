"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Image from "next/image";

const FirstView = () => {
  return (
    <Box id="first-view" justifySelf="center" maxWidth="1300px">
      <Stack direction="row" paddingX={{xs: "3%", sm: "5%"}} paddingTop={{xs: "1em", sm: "2em"}}>
        <Box width={"60vw"}>
          <Image src="/portrait.png" alt="portrait" width={600} height={800} />
        </Box>
        <Box width="60vw" sx={{ml: "-10%"}}>
          <Stack direction="column" height="100%" alignItems="center" justifyContent="flex-end">
            <h2 className="text-center sm:text-xl md:text-5xl font-bold sm:mb-2 md:mb-4">
              IT Infra Engineer
              <br />
              and
              <br />
              Project Manager
            </h2>
            <Image src="/first-view-devices.svg" alt="devices" width={600} height={500} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FirstView;
