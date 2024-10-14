const Fade = require("react-reveal/Fade");

import { Box, Button, Container, Grid, Heading, Paragraph } from "theme-ui";

function Contact({ ContactData }: { ContactData: any }) {
  return (
    <Container
      as="section"
      px={["15px", "20px", "25px", "40px", "90px", "250px", "380px"]}
      py={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
      sx={{ textAlign: "center" }}
      id="contact"
    >
      <Grid columns={[1, null, null, null, null, 2, null]}>
        <Fade bottom>
          <Box>
            <Heading as="h1" sx={styles.Heading}>
              {ContactData.title}
            </Heading>
            <Fade bottom delay={100}>
              <Paragraph as="p" sx={styles.Paragraph}>
                {ContactData.details}
              </Paragraph>
            </Fade>
            {/* <ContactModal btnText={ContactData.btnText} /> */}
            <Button
              sx={{
                bg: "accent.900",
                color: "white",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Fade>
        <Box sx={styles.RightImage}>
          <img src="contact-us.png" alt="contact" />
        </Box>
      </Grid>
    </Container>
  );
}
export default Contact;

const styles = {
  Heading: {
    fontSize: ["35px", null, null, "40px", "45px", null, null],
    mb: "15px",
  },
  Paragraph: {
    fontSize: "16px",
    color: "neutral.600",
    mb: "20px",
  },
  RightImage: {
    width: "100%",
    mx: "auto",
  },
};
