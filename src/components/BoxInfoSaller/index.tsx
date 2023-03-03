import { Box, Text, Avatar, Button, Link } from "@chakra-ui/react";

interface IBoxInfoSallerProps {
  name: string;
  description: string;
  id: string;
}

const BoxInfoSaller = ({ name, description, id }: IBoxInfoSallerProps) => {
  return (
    <Box
      backgroundColor="grey.10"
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="center"
    >
      <Avatar
        marginTop="37px"
        marginBottom="20px"
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
      >
        {description}
      </Text>
      <Link
        href={"/users/" + id}
        display="flex"
        width="100%"
        justifyContent="center"
      >
        <Button
          fontWeight="500"
          color="#FFFFFF"
          backgroundColor="grey.0"
          padding="12px 28px"
        >
          Ver Todos anuncios
        </Button>
      </Link>
    </Box>
  );
};

export default BoxInfoSaller;
