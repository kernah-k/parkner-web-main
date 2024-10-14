const Fade = require("react-reveal/Fade");

import { Box, Container, Grid, Heading, Paragraph } from "theme-ui";

function About({ AboutData }: { AboutData: any }) {
  return (
    <Container
      as="section"
      pr={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      pl={["15px", null, "20px", "25px", "30px", "35px", "40px"]}
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
      id="about-drivers"
    >
      <Grid columns={[1, null, null, null, null, 2, null]}>
        <Fade left delay={100}>
          <Box sx={styles.MobileImage}>
            <img src="/driver-mobile.jpg" alt="mobile-app" />
          </Box>
        </Fade>
        <Fade right delay={100}>
          <Box>
            <Box sx={styles.ImageBox}>
              <img src="/music.png" alt="Music" />
            </Box>
            <Heading as="h4" sx={styles.Heading}>
              {AboutData.title}
            </Heading>
            <Paragraph as="p" sx={styles.Pargraph}>
              {AboutData.details}
            </Paragraph>
            <Paragraph as="p" sx={styles.Pargraph}>
              {AboutData.details1}
            </Paragraph>
          </Box>
        </Fade>
      </Grid>
    </Container>
  );
}
export default About;

const styles = {
  MobileImage: {
    width: "60%",
    mt: "5rem",
    display: ["none", null, null, "block"],
  },
  ImageBox: {
    bg: "background_forthly",
    width: "70px",
    height: "70px",
    p: "20px",
    borderRadius: "50%",
    mb: "10px",
  },
  Heading: {
    fontSize: ["35px", null, null, "40px", "45px", null, null],
    mt: "-5px",
    fontWeight: "bold",
  },
  Pargraph: {
    fontSize: "15px",
    mb: "15px",
    mt: "10px",
    color: "neutral.600",
  },
};
