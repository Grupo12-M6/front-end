import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ModalBasic } from "../../components/Modals/baseModal";
import { EditAdForm } from "../../components/Form/editAdForm";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CardEditProduct = ({ isOpen, onClose }: IModalProps) => {
  return (
    <ModalBasic isOpen={isOpen} onClose={onClose}>
      <VStack
        p={["20px 5px", "20px 5px", "30px 15px", "30px 15px"]}
        alignItems="flex-start"
        h="542px"
        justifyContent="space-between"
      >
        <Heading fontFamily="Lexend" fontSize="md" color="black">
          Editar anúncio
        </Heading>
        <EditAdForm></EditAdForm>
      </VStack>
    </ModalBasic>
  );
};
