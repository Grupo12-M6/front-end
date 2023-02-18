import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Image,
  Divider,
  Button,
  ButtonGroup,
  Badge,
  TagLabel,
  Tag,
  HStack,
  TagRightIcon,
  TagLeftIcon,
  Flex,
  Avatar,
  Img,
  Box,
} from "@chakra-ui/react";
import { MdAccessTime, MdArrowRightAlt } from "react-icons/md";

interface ICardActionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  linkImage?: string;
  name: string;
  miles?: string;
  year?: string;
  price?: string;
}

const ProductCardAuction = ({
  title,
  description,
  linkImage,
  name,
  miles,
  year,
  price,
  backgroundImage,
}: ICardActionProps) => {
  return (
    <Card width="735px" height="326px" maxHeight="326px" maxWidth="735px">
      <Image
        src={backgroundImage}
        width="100%"
        overflow="hidden"
        position="relative"
        filter="auto"
        brightness="40%"
      />
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        width="100%"
        height="100%"
        justifyContent="space-between"
      >
        <Box marginLeft="30px" marginTop="15px">
          <Tag
            size="sm"
            key="sm"
            borderRadius="full"
            variant="solid"
            colorScheme="white"
            background="white"
            textAlign="center"
            alignItems="center"
          >
            <TagLeftIcon color="purple" as={MdAccessTime} />
            <TagLabel
              marginTop="5px"
              marginBottom="5px"
              fontSize="13px"
              color="black"
            >
              00:00:00
            </TagLabel>
          </Tag>
        </Box>
        <Box marginLeft="30px" marginRight="30px" marginTop="30px">
          <Heading noOfLines={1} size="md" color="white">
            {title}
          </Heading>
          <Text noOfLines={1} color="gray.200">
            {description}
          </Text>
        </Box>
        <HStack
          spacing="2"
          marginLeft="30px"
          marginBottom="15px"
          marginTop="15px"
        >
          <Avatar size="sm" name={name} src={linkImage} />
          <Text color="white">{name}</Text>
        </HStack>
        <HStack
          spacing="2"
          justifyContent="space-between"
          marginLeft="30px"
          marginRight="30px"
        >
          <Box display="flex" flexDirection="row" gap="10px">
            <Badge
              variant="solid"
              colorScheme="Gray 100"
              backgroundColor="gray.100"
              color="purple"
            >
              {year}
            </Badge>
            <Badge
              variant="solid"
              colorScheme="Gray 100"
              backgroundColor="gray.100"
              color="purple"
            >
              {miles}
            </Badge>
          </Box>

          <Text color="white">R$ {price}</Text>
        </HStack>
        <Box>
          <Button
            justifyContent="space-between"
            colorScheme="purple"
            borderRadius="none"
            width="100%"
          >
            <Text marginLeft="10px" fontSize="12">
              Acessar página do leilão
            </Text>
            <TagRightIcon marginRight="10px" as={MdArrowRightAlt} />
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCardAuction;
