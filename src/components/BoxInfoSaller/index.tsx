import { Box, Text, Avatar, Button } from "@chakra-ui/react";

interface IBoxInfoSallerProps {
  name: string;
  description: string;
}

const BoxInfoSaller = ({ name, description }: IBoxInfoSallerProps) => {
  return (
    <Box
      minW="351px"
      minH="398px"
      maxW="440px"
      maxH="426px"
      backgroundColor="grey.10"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Avatar
        marginTop="37px"
        marginBottom="28px"
        size="lg"
        name={name}
        src=""
      />
      <Text color="grey.1" fontWeight="600">
        {name}
      </Text>
      <Text
        marginTop="32px"
        marginBottom="32px"
        fontWeight="400"
        fontSize="16px"
        textAlign="center"
        marginLeft="44px"
        marginRight="44px"
      >
        {description}
      </Text>
      <Button fontWeight="600" color="#FFFFFF" backgroundColor="grey.0">
        Ver Todos anuncios
      </Button>
    </Box>
  );
};

export default BoxInfoSaller;
