const Fade = require("react-reveal/Fade");

import { Box, Container, Flex, Grid, Heading } from "theme-ui";

function Get({ GetData }: { GetData: any }) {
  return (
    <Container
      as="section"
      pr={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      pl={["15px", null, "20px", "25px", "30px", "35px", "90px"]}
      sx={styles.Container}
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
      id="get"
    >
      <Grid columns={[1, null, 2, null, null, 2, null, "1fr 2fr"]}>
        <Box sx={styles.LeftImage}>
          <img src="smart-parking1.png" alt="App" />
        </Box>
        <Box>
          <Fade bottom>
            <Heading as="h3" sx={styles.Heading}>
              {GetData.title}
            </Heading>

            <Box sx={{ mt: "2rem" }}>
              {GetData.features &&
                GetData.features.map((feature: any, i: any) => (
                  <Box key={i} sx={styles.CardContainer}>
                    <Flex sx={{ alignItems: "center" }}>
                      <Box sx={styles.IconImage}>
                        <img src={feature.image} alt={feature.title} />
                      </Box>
                      <Heading sx={styles.FeatureTitle} as="h4">
                        {feature.title}
                      </Heading>
                    </Flex>
                    {/* <Paragraph sx={styles.FeatureDetails} as="p">
                  {feature.details}
                </Paragraph> */}
                  </Box>
                ))}
            </Box>
          </Fade>
        </Box>
      </Grid>
    </Container>
  );
}
export default Get;

const styles = {
  Container: {
    background: `url('${"/bg.png"}')`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    py: "4rem",
  },
  Heading: {
    fontSize: ["35px", null, null, "40px", "45px", null, null],
    color: "background_secondary",
    mb: "-10px",
    fontWeight: "bold",
  },
  Paragraph: {
    color: "text_secondary",
    fontSize: "15px",
    mt: "30px",
  },
  Buttons: {
    color: "text",
    bg: "background_secondary",
    mt: "15px",
    mb: "30px",
  },
  LeftImage: {
    width: "68%",
    ml: ["53px", null, null, "100px", null, "51px", "75px"],
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
    color: "white",
  },
  FeatureDetails: {
    fontSize: "14px",
    fontWeight: 500, // Change the font weight as needed
    color: "neutral.50", // Change the color as needed
  },
};
