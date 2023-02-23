import { Image, Text, Box } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
interface IBoxGalleryImagesProps {
  images: string[];
}
[];

const BoxGalleryImages = ({ images }: IBoxGalleryImagesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      borderRadius="4px"
      minW="351px"
      minH="359px"
      maxW="440px"
      maxH="377px"
      backgroundColor="grey.10"
      display="flex"
      flexDirection="column"
    >
      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Imagem Do Veículo</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <Text
        marginLeft="44px"
        marginTop="36px"
        marginBottom="22px"
        colorScheme="fonts.body"
        fontSize="fontSizes.ls"
        fontWeight="600"
        fontStyle="normal"
        color="grey.1"
      >
        Fotos
      </Text>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="5px"
        rowGap="32px"
        justifyContent="space-between"
        marginLeft="44px"
        marginRight="44px"
        marginBottom="36px"
        minW="281px"
        minH="230px"
      >
        {images.map((items) => {
          return (
            <Box
              minW="90px"
              minH="90px"
              maxW="108px"
              maxH="108px"
              borderRadius="4px"
              display="flex"
            >
              <Image src={items} borderRadius="4px" />
              {/* <Button
                minW="90px"
                minH="90px"
                maxW="108px"
                maxH="108px"
                onClick={onOpen}
              ></Button> */}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Imagem Do Veículo</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Image src={items}></Image>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          );
        }, 6)}
      </Box>
    </Box>
  );
};

export default BoxGalleryImages;
{
  /* <Box
          minW="90px"
          minH="90px"
          maxW="108px"
          maxH="108px"
          borderRadius="4px"
          display="flex"
        >
          <Image
            src="https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096"
            borderRadius="4px"
          />
        </Box> */
}
