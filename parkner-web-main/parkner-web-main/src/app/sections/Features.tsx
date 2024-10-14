const Fade = require("react-reveal/Fade");

import { Box, Container, Flex, Grid, Heading, Paragraph } from "theme-ui";

function Features({ FeaturesData }: { FeaturesData: any }) {
  return (
    <Container
      as="section"
      pl={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      pr={["15px", null, "20px", "25px", "30px", "35px", "40px"]}
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
      id="how-it-works"
    >
      <Grid columns={[1, null, null, null, null, 2, null, "1fr 2fr"]}>
        <Fade left>
          <Box>
            <Box sx={styles.ImageBox}>
              <img src="/music.png" alt="Music" />
            </Box>
            <Heading as="h2" sx={styles.Heading}>
              {FeaturesData.title}
            </Heading>
            <Paragraph as="p" sx={styles.Paragraph}>
              {FeaturesData.details}
            </Paragraph>
            <Box sx={{ mt: "2rem" }}>
              {FeaturesData.features &&
                FeaturesData.features.map((feature: any, i: any) => (
                  <Box key={i} sx={styles.CardContainer}>
                    <Flex sx={{ alignItems: "center" }}>
                      <Box sx={styles.IconImage}>
                        <img src={feature.image} alt={feature.title} />
                      </Box>
                      <Heading sx={styles.FeatureTitle} as="h4">
                        {feature.title}
                      </Heading>
                    </Flex>
                    <Paragraph sx={styles.FeatureDetails} as="p">
                      {feature.details}
                    </Paragraph>
                  </Box>
                ))}
            </Box>
          </Box>
        </Fade>
        <Fade right>
          <Box sx={styles.RightImage}>
            <img src="/features/FeatureKit.png" alt="Feature" />
          </Box>
        </Fade>
      </Grid>
    </Container>
  );
}
export default Features;

const styles = {
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
    marginBottom: "10px",
    fontWeight: 600,
  },
  Paragraph: {
    fontSize: "16px",
    color: "neutral.600",
  },
  CardContainer: {
    mb: "2rem",
    p: {
      fontSize: "15px",
      marginTop: "10px",
    },
  },

  FeatureTitle: {
    fontSize: "16px",
    fontWeight: 600, // Change the font weight as needed
  },
  FeatureDetails: {
    fontSize: "14px",
    fontWeight: 500, // Change the font weight as needed
    color: "neutral.600", // Change the color as needed
  },
  IconImage: {
    bg: "background_forthly",
    width: "50px",
    height: "50px",
    padding: "16px",
    borderRadius: "50%",
    marginRight: "15px",
    h4: {
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  RightImage: {
    width: "85%",
    ml: ["27px", null, null, null, null, "auto", null],
    mt: "5rem",
    display: ["none", null, null, "block"],
  },
  Image: {
    width: "100%",
    height: "auto",
  },
};
