const Fade = require("react-reveal/Fade");

import { Box, Container, Grid, Paragraph } from "theme-ui";

import Logo from "../components/Logo";
import Socils from "../components/Socils";

function Footer({ FooterData }: { FooterData: any }) {
  return (
    <Container
      as="footer"
      px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      sx={styles.Container}
    >
      <Grid columns={[1, null, null, null, null, 3, null]}>
        <Box
          sx={{
            mt: "8px",
            mx: ["auto", null, null, null, null, "unset", null],
          }}
        >
          <Socils socials={FooterData.socials} />
        </Box>
        <Fade delay={500}>
          <Box sx={styles.Logo as any}>
            <Logo logo={FooterData.logo} />
          </Box>
        </Fade>
        <Box sx={styles.Copyright as any}>
          <Paragraph as="p">
            {new Date().getFullYear()} {FooterData.copyright}
          </Paragraph>
        </Box>
      </Grid>
    </Container>
  );
}
export default Footer;

const styles = {
  Container: {
    background: "accent.900",
    py: "20px",
  },
  Logo: {
    textAlign: "center",
    mt: "3px",
  },
  Copyright: {
    textAlign: ["center", null, null, null, null, "right", null],
    color: "text_secondary",
    mt: "3px",
    fontSize: "16px",
  },
};
