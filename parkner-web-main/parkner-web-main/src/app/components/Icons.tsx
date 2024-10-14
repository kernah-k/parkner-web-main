import { Icon } from "@iconify/react";
import { Box } from "theme-ui";

function Icons({ icon, sx }: { icon: any; sx?: any }) {
  return (
    <Box as="span" sx={sx}>
      <Icon icon={icon} />
    </Box>
  );
}
export default Icons;
