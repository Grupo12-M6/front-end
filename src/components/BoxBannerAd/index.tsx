import { Box, Image } from "@chakra-ui/react";

interface IBoxBannerProps {
  imageLink: string;
}

const BoxBannerAd = ({ imageLink }: IBoxBannerProps) => {
  return (
    <Box
      minW="351px"
      minH="355px"
      maxW="752px"
      maxH="355px"
      backgroundColor="grey.10"
      display="flex"
    >
      <Image src={imageLink}></Image>
    </Box>
  );
};

export default BoxBannerAd;
