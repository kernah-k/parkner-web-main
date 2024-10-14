import { Flex, Link } from "theme-ui";
import Icons from "./Icons";

function Socils({ socials }: { socials: any }) {
  return (
    <Flex>
      {socials &&
        socials.map((social: any, i: any) => (
          <Link href={social.url} key={i} sx={styles.Socials} target="_blank">
            <Icons icon={social.icon} />
          </Link>
        ))}
    </Flex>
  );
}
export default Socils;

const styles = {
  Socials: {
    color: "white",
    mr: "10px",
    fontSize: "15px",
  },
};
