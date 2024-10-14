"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { Box, Button, Heading } from "theme-ui";
import Icons from "./Icons";

function Nav({ navs }: { navs: any }) {
  const ref = useRef();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState<number | null>(null); // Add state to manage dropdown

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = (index: number) => {
    setDropdown(dropdown === index ? null : index); // Toggle dropdown
  };

  useOnClickOutside(ref, () => {
    setNav(false);
    setDropdown(null); // Close dropdown on outside click
  });

  return (
    <Box className="nav" sx={{ flex: "0 0 50%", textAlign: "right" }} ref={ref}>
      <Button onClick={handleNav} sx={styles.Bar}>
        {!nav && <Icons icon="la:bars" sx={styles.Icon} />}
        {nav && <Icons icon="gridicons:cross" sx={styles.Icon} />}
      </Button>
      <Box as="nav" sx={styles.Nav as any} className={nav ? "active" : ""}>
        <Heading as="h3" sx={{ mt: "10px", color: "white" }}>
          Parkner
        </Heading>
        <Box sx={styles.NavChild as any}>
          {navs &&
            navs.map((nav: any, i: any) => (
              <Box key={i}>
                {nav.dropdown ? (
                  <>
                    <Box sx={styles.Link} onClick={() => toggleDropdown(i)}>
                      {nav.name}
                      <Icons
                        icon="fa-solid:chevron-down"
                        sx={styles.ChevronIcon}
                      />
                    </Box>
                    {dropdown === i && (
                      <Box sx={styles.Dropdown}>
                        {nav.dropdown.map((item: any, j: any) => (
                          <Link
                            key={j}
                            to={item.path}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className="nav"
                            style={styles.Link}
                            onClick={() => setNav(false)} // Close nav on click
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Box>
                    )}
                  </>
                ) : (
                  <Link
                    to={nav.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    key={i}
                    className="nav"
                    style={styles.Link}
                    onClick={() => setNav(false)} // Close nav on click
                  >
                    {nav.name}
                  </Link>
                )}
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Nav;

function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const styles = {
  Bar: {
    bg: "transparent",
    fontSize: "22px",
    padding: "0",
    color: "background",
    cursor: "pointer",
  },
  Nav: {
    bg: "rgba(53, 140, 124, 0.9)",
    position: "fixed",
    left: "-100%",
    height: "100%",
    top: "0",
    width: "260px",
    textAlign: "left",
    pl: "35px",
    boxShadow: "0 0 20px #0000002e",
    transition: "left 0.3s cubic-bezier(0.545, 0, 0.05, 1)",
    "&.active": {
      left: "0",
    },
  },
  NavChild: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  Link: {
    display: "flex", // Change to flex
    alignItems: "center", // Center items vertically
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: "5px",
    cursor: "pointer",
    "&.active": {
      color: "accent.900",
    },
  },
  Dropdown: {
    pl: "20px",
  },
  ChevronIcon: {
    marginLeft: "5px",
  },
  Icon: {
    fontSize: "22px",
  },
};
