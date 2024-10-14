import { Box, Container, Grid, Heading, Paragraph } from "theme-ui";

const Fade = require("react-reveal/Fade");

function Service({ ServiceData }: { ServiceData: any }) {
  return (
    <Container
      as="section"
      px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
      id="benefits"
    >
      <Grid columns={[1, null, null, 2, null, 3, null]}>
        {ServiceData &&
          ServiceData.map((service: any, i: any) => (
            <Fade
              key={i}
              bottom
              delay={i === 1 ? "100" : i === 2 ? "200" : "0"}
            >
              <Box sx={styles.Card as any}>
                <Box sx={styles.ImageBox}>
                  <img src={service.image} alt={service.name} />
                </Box>
                <Heading as="h3" sx={styles.CardHeading}>
                  {service.name}
                </Heading>
                <Paragraph as="p" sx={styles.CardParagraph}>
                  {service.description}
                </Paragraph>
              </Box>
            </Fade>
          ))}
      </Grid>
    </Container>
  );
}
export default Service;

const styles = {
  Card: {
    textAlign: "center",
    bg: "background_secondary",
    padding: "15px 15px",
    borderRadius: "15px",
    boxShadow: "0 0 20px #a2a2a212",
    height: "100%", // Ensures all cards have the same height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media screen and (min-width: 1080px)": {
      padding: "25px 30px", // Adjusted padding for last 4 breakpoints
    },
  },
  ImageBox: {
    background: "#FFF4F5",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    margin: "0 auto",
    padding: "22px",
    marginBottom: "12px",
  },
  CardHeading: {
    fontSize: "18px",
    marginBottom: "12px",
    fontWeight: 600,
  },
  CardParagraph: {
    fontSize: "15px",
    lineHeight: 2,
    color: "neutral.600",
  },
};
