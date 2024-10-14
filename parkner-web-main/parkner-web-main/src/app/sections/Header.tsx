"use client";
import { Container, Flex } from "theme-ui";

import Logo from "../components/Logo";
import Nav from "../components/Nav";

function Header({ NavData }: { NavData: any }) {
  return (
    <Container
      as="header"
      px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]}
      sx={styles.HeaderArea as any}
    >
      <Flex>
        <Logo logo={NavData.logo} />
        <Nav navs={NavData.navs} />
      </Flex>
    </Container>
  );
}
export default Header;

const styles = {
  HeaderArea: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    bg: "accent.900",
    py: "12px",
    zIndex: "99",
  },
};
