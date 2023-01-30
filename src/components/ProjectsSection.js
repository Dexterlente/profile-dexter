import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "News Website",
    description:
      `News Website boilerplate front end designs can be
      edited according to ones specification.
      Front end is being rendered using vanilla javascript
      and using fetch for backend api rendering.
      Django framework is being used for the backend`,
    getImageSrc: () => require("../images/newswebsite.png"),
    gitLink: "https://github.com/Dexterlente/project",
  },
  {
    title: "Social Media",
    description:
      `An emailing system developed in python django for
      the backend and vanilla javascript for the front end.
      User can visit their Inbox and sent emails, or
      archive emails.`,
    getImageSrc: () => require("../images/socialmedia.png"),
    gitLink: "https://github.com/Dexterlente/social",
  },
  {
    title: "Notes",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/notes.png"),
    gitLink: "https://github.com/Dexterlente/react-django-notesapplication",
  },
  {
    title: "Mail",
    description:
    `An emailing system developed in python django for
    the backend and vanilla javascript for the front end.
    User can visit their Inbox and sent emails, or
    archive emails.
    `,
    getImageSrc: () => require("../images/email.png"),
    gitLink: "https://github.com/Dexterlente/mail",
  },
  {
    title: "Ecommerce",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/ecommerce.png"),
    gitLink: "https://github.com/Dexterlente/ecommerce",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#5A5A5A"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            gitLink={project.gitLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
