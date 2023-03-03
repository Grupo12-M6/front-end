import { Box, Image } from "@chakra-ui/react";
import { IImage } from "../../interfaces/images";
import image from "./../../assets/CarPlaceHolder.svg";

interface IBoxBannerProps {
  imageLink: IImage[];
}

const BoxBannerAd = ({ imageLink }: IBoxBannerProps) => {
  return (
    <Box
      backgroundColor="grey.10"
      display="flex"
      width="100%"
      height="250px"
      borderRadius="4px"
      alignItems="center"
      justifyContent="center"
    >
      {imageLink[0] ? (
        <Image
          borderRadius="4px"
          maxW="300px"
          maxH="250px"
          width="100%"
          src={imageLink[0].url}
        ></Image>
      ) : (
        <Image borderRadius="4px"></Image>
      )}
      {/* <Image borderRadius="4px" src={imageLink}></Image> */}
    </Box>
  );
};

export default BoxBannerAd;
