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
import { IImage } from "../../interfaces/images";
import { ModalBasic } from "../Modals/baseModal";
interface IBoxGalleryImagesProps {
  images: IImage[];
}

const BoxGalleryImages = ({ images }: IBoxGalleryImagesProps) => {
  return (
    <Box
      borderRadius="4px"
      backgroundColor="grey.10"
      display="flex"
      flexDirection="column"
    >
      <Text
        marginLeft="30px"
        marginTop="20px"
        marginBottom="22px"
        colorScheme="fonts.body"
        fontSize="fontSizes.ls"
        fontWeight="300"
        fontStyle="normal"
        color="grey.1"
      >
        Fotos
      </Text>
      {images[0] ? (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap="5px"
          rowGap="30px"
          justifyContent="space-between"
          marginLeft="22px"
          marginRight="22px"
          marginBottom="22px"
        >
          {images.map((items, index) => {
            const { isOpen, onOpen, onClose } = useDisclosure();
            return (
              <Box
                minW="30px"
                minH="30px"
                maxW="70px"
                maxH="70px"
                borderRadius="4px"
                display="flex"
                key={index}
              >
                <Image
                  src={items.url}
                  width="100%"
                  borderRadius="4px"
                  onClick={onOpen}
                />

                <ModalBasic
                  title="Foto"
                  children={
                    <Image width="100%" src={items.url} borderRadius="4px" />
                  }
                  isOpen={isOpen}
                  onClose={onClose}
                ></ModalBasic>
              </Box>
            );
          }, 6)}
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap="5px"
          rowGap="30px"
          justifyContent="space-between"
          marginLeft="22px"
          marginRight="22px"
        >
          SEM IMAGEM
        </Box>
      )}
    </Box>
  );
};

export default BoxGalleryImages;
