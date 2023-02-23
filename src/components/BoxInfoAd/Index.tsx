import { Box, Text, Badge, HStack, Button } from "@chakra-ui/react";

interface IBoxInfoAd {
  title: string;
  year: string;
  milles: string;
  price: string;
}

const BoxInfoAd = ({ title, year, milles, price }: IBoxInfoAd) => {
  return (
    <Box
      minW="351px"
      minH="326.96px"
      maxW="751px"
      maxH="239.39px"
      backgroundColor="grey.10"
      borderRadius="4px"
    >
      <Text
        marginLeft="44px"
        marginRight="44px"
        marginTop="44px"
        marginBottom="44px"
        fontSize="fontSizes.ls"
        fontWeight="600"
        fontStyle="fonts.heading"
      >
        {title}
      </Text>
      <HStack
        spacing="2"
        justifyContent="space-between"
        marginLeft="44px"
        marginRight="44px"
      >
        <Box display="flex" flexDirection="row" gap="10px" flexWrap="wrap">
          <Badge
            variant="solid"
            colorScheme="Gray 100"
            backgroundColor="gray.100"
            color="purple"
            fontStyle="fonts.body"
          >
            {year}
          </Badge>
          <Badge
            variant="solid"
            colorScheme="Gray 100"
            backgroundColor="gray.100"
            color="purple"
            fontStyle="fonts.body"
          >
            {milles}
          </Badge>
        </Box>

        <Text
          fontSize="fontSizes.ls"
          fontWeight="500"
          fontStyle="fonts.heading"
        >
          R$ {price}
        </Text>
      </HStack>
      <Button
        backgroundColor="brand.1"
        color="#FFFFFF"
        fontWeight="600"
        fontSize="14px"
        fontStyle="fonts.body"
        marginLeft="44px"
        marginRight="44px"
        marginTop="28px"
        marginBottom="28px"
      >
        Comprar
      </Button>
    </Box>
  );
};

export default BoxInfoAd;
