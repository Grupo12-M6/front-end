import { Box, Text, Badge, HStack, Button, Link } from "@chakra-ui/react";

interface IBoxInfoAd {
  title: string;
  year: string | number;
  milles: string | number;
  price: string | number;
}

const BoxInfoAd = ({ title, year, milles, price }: IBoxInfoAd) => {

  // --- NUMERO E MENSAGEM PARA O WhatsApp 
  // COLOCAR NUMERO SEM ESPAÇOS OU SÍMBOLOS, APENAS NÚMEROS
  const phoneCompany = "1130042222"
  const messageBuy = `Olá! Gostaria de comprar o produto: ${title}`

  return (
    <Box backgroundColor="grey.10" borderRadius="4px">
      <Text
        marginLeft="22px"
        marginRight="22px"
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
        marginLeft="22px"
        marginRight="22px"
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
      <Link
        href={`https://wa.me/55${phoneCompany}?text=${messageBuy}`}
        target={"_blank"}
      >
        <Button
          backgroundColor="brand.1"
          color="#FFFFFF"
          fontWeight="600"
          fontSize="14px"
          fontStyle="fonts.body"
          marginLeft="22px"
          marginRight="22px"
          marginTop="28px"
          marginBottom="28px"
        >
          Comprar
        </Button>
      </Link>
    </Box>
  );
};

export default BoxInfoAd;
