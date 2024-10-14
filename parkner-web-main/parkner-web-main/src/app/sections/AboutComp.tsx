const Fade = require("react-reveal/Fade");

import { Box, Container, Grid, Heading, Paragraph } from "theme-ui";

function Aboutcomp({ AboutcompData }: { AboutcompData: any }) {
  return (
    <Container
      as="section"
      pr={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      pl={["15px", null, "20px", "25px", "30px", "35px", "40px"]}
      id="about-companies"
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
    >
      <Grid columns={[1, null, null, null, null, 2, null]}>
        <Fade left delay={100}>
          <Box>
            <Box sx={styles.ImageBox}>
              <img src="/music.png" alt="Music" />
            </Box>
            <Heading as="h4" sx={styles.Heading}>
              {AboutcompData.title}
            </Heading>

            <Paragraph as="p" sx={styles.Pargraph}>
              {AboutcompData.details}
            </Paragraph>
            <Paragraph as="p" sx={styles.Pargraph}>
              {AboutcompData.details1}
            </Paragraph>
            <Box sx={styles.List as any}>
              {AboutcompData.lists &&
                AboutcompData.lists.map((list: any, i: any) => (
                  <Box key={i}>
                    <Paragraph as="p">{list.name}</Paragraph>
                    <Paragraph as="p">{list.description}</Paragraph>
                  </Box>
                ))}
            </Box>
          </Box>
        </Fade>
        <Fade right delay={100}>
          <Box sx={styles.HandImage}>
            <img src="/hand.png" alt="Hand" />
          </Box>
        </Fade>
      </Grid>
    </Container>
  );
}
export default Aboutcomp;

const styles = {
  HandImage: {
    width: "92%",
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
  List: {
    mt: "15px",
    p: {
      ml: "16px",
      fontSize: "15px",
      mb: "10px",
      position: "relative",
      "&:after": {
        content: '""',
        width: "10px",
        height: "10px",
        bg: "accent.900",
        position: "absolute",
        left: "-15px",
        top: "50%",
        transform: "translateY(-50%)",
        borderRadius: "50%",
      },
    },
  },
};
