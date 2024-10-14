const Fade = require("react-reveal/Fade");
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
} from "theme-ui";

function Hero({ HeroData }: { HeroData: any }) {
  return (
    <Container
      as="section"
      pl={["15px", "20px", "25px", "40px", "60px", "105px"]}
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
      sx={styles.Container}
      id="hero"
      pr={["10px", "15px", "20px", "40px", "0"]}
    >
      <Grid columns={[1, null, null, null, 2]}>
        <Box sx={{ mt: ["6rem", null, null, null, "8rem", "13rem", "15rem"] }}>
          <Fade left>
            <Heading as="h1" sx={styles.Heading}>
              {HeroData.title}
            </Heading>
          </Fade>
          <Fade left delay={100}>
            <Paragraph as="p" sx={styles.ContainerText}>
              {HeroData.description}
            </Paragraph>
          </Fade>
          <Flex sx={{ alignItems: "center", mt: "2rem" }}>
            <Fade left delay={200}>
              <a href="#about-drivers" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    bg: "background",
                    color: "text",
                    width: "auto",
                    padding: "0.5rem 1rem",
                    pr: "5 rem",
                  }}
                >
                  {HeroData.readMoreBtn}
                </Button>
              </a>
            </Fade>

            <Link href={HeroData.downloadAppUrl}>
              <Button
                sx={{
                  bg: "accent.900",
                  color: "neutral.0",
                  width: "auto",
                  padding: "0.5rem 1rem",
                  ml: "1rem",
                }}
              >
                {HeroData.downloadAppBtn}
              </Button>
            </Link>
          </Flex>
        </Box>
        <Fade right>
          <Box sx={styles.Image}>
            <img src="/mobile-devices.png" alt="hero-image" width={450} />
          </Box>
        </Fade>
      </Grid>
    </Container>
  );
}
export default Hero;

const styles = {
  Container: {
    background: `url('${"/bg.png"}')`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  Heading: {
    fontSize: ["35px", null, null, null, "45px", null, "60px"],
    color: "white",
    mt: "-5px",
  },
  ContainerText: {
    color: "neutral.50",
    fontSize: ["14px", null, null, null, null, null, "20px"],
    margin: "10px 0",
  },
  Image: {
    width: ["50%", null, null, "85%", "85%", "85%", "85%"],
    mx: "auto",
    mt: [null, null, null, null, "9rem", null, "7rem"],
  },
};
