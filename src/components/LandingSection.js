import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { TypeAnimation } from 'react-type-animation';


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/103068534?s=400&u=e9f70456701a7db7b50fd0f3d4ff9da3475b69c1&v=4"
          size="3xl"
          name="Dexter"
        />
        <Heading as="h4" size="xl" noOfLines={1}>
        Hello, I am Dexter Lente!
        </Heading>
          <div className="flex justify-center text-3xl">
                    <div>
                    <TypeAnimation
                  sequence={[
                    'Front', // Types 'One'
                    2000, // Waits 1s
                    'Back', // Deletes 'One' and types 'Two'
                    2000,
                  ]}
                  wrapper="div"
                  cursor={true} repeat={Infinity}
                  speed="50"
                  /> 
                  </div>   
                <div>
                  - end developer
                </div>
        </div>
      </VStack>

    </VStack>
  </FullScreenSection>
);

export default LandingSection;
