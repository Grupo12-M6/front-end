import { Text, Box } from "@chakra-ui/react";

interface IBoxDescAd {
  description: string;
}

const BoxDescAd = ({ description }: IBoxDescAd) => {
  return (
    <Box
      backgroundColor="grey.10"
      borderRadius="4px"
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <Text
        marginLeft="22px"
        marginRight="22px"
        marginTop="36px"
        fontStyle="fonts.heading"
        color="grey.1"
        fontWeight="600"
      >
        Descrição
      </Text>
      <Text
        fontWeight="400"
        fontStyle="fonts.body"
        marginLeft="22px"
        marginRight="22px"
        marginBottom="36px"
      >
        {description}
      </Text>
    </Box>
  );
};

export default BoxDescAd;
