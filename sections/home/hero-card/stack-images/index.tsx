import { Avatar, Box } from "@mui/material";
import { MainHeroImage, StackedBottomImage } from "@assets/home";
import ScaleInView from "@components/animations/animation-scroll/scale-in-view";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";

export const StackImages = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <ScaleInView>
        <Avatar
          src={MainHeroImage?.src}
          sx={{
            width: "80%",
            height: "auto",
            backgroundColor: "transparent",
            maxWidth: "100%",
            margin: "auto",
            verticalAlign: "middle",
          }}
          alt="100"
          variant="rounded"
        />
      </ScaleInView>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          transform: "translate(1%, 70%)",
          zIndex: 111,
        }}
      >
        <SlideUpInView initialY={100}>
          <Avatar
            src={StackedBottomImage?.src}
            sx={{
              width: "50%",
              height: "auto",
              backgroundColor: "transparent",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
            alt="100"
            variant="rounded"
          />
        </SlideUpInView>
      </Box>
    </Box>
  );
};
