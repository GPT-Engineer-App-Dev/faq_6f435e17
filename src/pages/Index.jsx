import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is React?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Why use Chakra UI?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications with speed. It is highly customizable and has a wide range of components that are easy to style.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I install React?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>You can install React by using the Node Package Manager (npm). In your terminal, simply run 'npm install react' to add React to your project's dependencies.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Can I use React with other libraries?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Yes, React can be used with a variety of other libraries and frameworks. It's commonly paired with libraries like Redux for state management or React Router for routing.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Index;
