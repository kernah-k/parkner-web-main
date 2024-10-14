import { Box, Container } from "theme-ui";

function Banner() {
  return (
    <Container
      as="section"
      id="banner"
      pb={["2rem", null, null, null, "2.3rem", "3.3rem", "3.9rem"]}
    >
      <Box sx={styles.Image}>
        <img
          src="/parking-gate.jpg"
          alt="parking-gate"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Container>
  );
}

export default Banner;

const styles = {
  Image: {
    width: "100%",
  },
};
