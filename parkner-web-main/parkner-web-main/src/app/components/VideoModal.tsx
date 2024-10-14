import { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Box, Button } from "theme-ui";
import Icons from "./Icons";

function VideoModal({ videoBtn, youtube }: { videoBtn: any; youtube: any }) {
  const [state, setState] = useState({
    visible: false,
  });
  const modaleToggler = () => {
    setState({
      visible: !state.visible,
    });
  };
  return (
    <Box>
      <Button
        variant="buttons.secondary"
        sx={{
          backgroundColor: "transparent",
          color: "background",
          cursor: "pointer",
        }}
        onClick={modaleToggler}
      >
        <Icons icon="clarity:play-solid" />
        {videoBtn}
      </Button>
      <Rodal
        visible={state.visible}
        onClose={modaleToggler}
        width={950}
        height={580}
        duration={400}
        customMaskStyles={{ background: "#0B0B13AB" }}
        enterAnimation="fade"
        leaveAnimation="fade"
        customStyles={styles.Rodal}
      >
        <Box>
          {state.visible && (
            <iframe
              style={{
                width: "100%",
                // height: ["300px", "0", "400px", "580px", "0", "0", "580px"],
                height: "300px",
              }}
              src={`https://www.youtube.com/embed/${youtube}?autoplay=1`}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Rodal>
    </Box>
  );
}
export default VideoModal;

const styles = {
  Rodal: {
    ".rodalDialog": {
      p: "0",
      bg: "transparent",
      width: [
        "300px !important",
        null,
        "400px !important",
        null,
        null,
        "600px !important",
        "950px !important",
      ],
      height: [
        "300px !important",
        null,
        null,
        null,
        null,
        "320px !important",
        "580px !important",
      ],
      top: [null, null, null, "0 !important", "0 !important"],
    },
    ".rodalClose": {
      top: "-20px",
      right: "2px",
      "&:after, &:before": {
        background: "white",
      },
    },
  },
};
