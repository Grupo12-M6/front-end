import { Box, Text, Avatar, HStack } from "@chakra-ui/react";

interface IBoxCommentsProduct {
  users: string[];
  comments: string[];
}

const BoxCommentsAd = ({ users, comments }: IBoxCommentsProduct) => {
  return (
    <Box
      minW="351px"
      width="751px"
      backgroundColor="grey.10"
      marginBottom="36px"
      display="flex"
      flexDirection="column"
      gap="28px"
    >
      <Text
        marginTop="36px"
        marginLeft="44px"
        marginRight="44px"
        fontStyle="fonts.heading"
        color="grey.1"
        fontWeight="600"
      >
        Comentários
      </Text>
      {comments.map((items, indice) => {
        return (
          <Box
            marginLeft="44px"
            marginRight="44px"
            display="flex"
            flexDirection="column"
            gap="16px"
          >
            <HStack spacing={2}>
              <Avatar size="sm" name={users[indice]} src="" />
              <Text fontStyle="fonts.body" color="grey.1" fontWeight="500">
                {users[indice]}
              </Text>
            </HStack>
            <Text fontStyle="fonts.body" color="grey.2" fontWeight="400">
              {items}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default BoxCommentsAd;
