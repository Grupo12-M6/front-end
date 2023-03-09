import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { List } from "../../components/List";
import { Header } from "../../components/Header";
import { FooterDesktop } from "../../components/Footer";
import { HeaderMobile } from "../../components/Header/HeaderMobile";
import { UseGetScreenWidth } from "../../hooks";
import { useParams } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { TbFaceIdError } from "react-icons/tb";
import { BiError } from "react-icons/bi";
import { LoginModal } from "../../components/Modals/LoginModal";
import { RegisterModal } from "../../components/Modals/RegisterModal";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const ResetPassword = () => {
  const [, width] = UseGetScreenWidth();
  const { activateAccount } = useAuth();
  const { id } = useParams();

  const {
    isOpen: isMLoginOpen,
    onOpen: onMLoginOpen,
    onClose: onMLoginClose,
  } = useDisclosure();

  const {
    isOpen: isMRegisterOpen,
    onOpen: onMRegisterOpen,
    onClose: onMRegisterClose,
  } = useDisclosure();

  const {
    isOpen: isDialogOpen,
    onOpen: onDialogOpen,
    onClose: onDialogClose,
  } = useDisclosure();

  useEffect(() => {
    activateAccount(id);
  }, []);

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDirection="column"
      overflowX="hidden"
      scrollBehavior="smooth"
      bgColor="grey.8"
    >
      {width >= 768 ? <Header /> : <HeaderMobile />}
      <Flex flexDir="column" margin="100">
        <Box>
          <FormControl
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <FormLabel fontSize="15px">Nova Senha</FormLabel>
            <Input width="25%"></Input>
            <FormLabel fontSize="15px">Digite novamente a nova senha</FormLabel>
            <Input width="25%"></Input>
            <Button type="submit">Enviar</Button>
          </FormControl>
        </Box>
      </Flex>
      <FooterDesktop />
    </Flex>
  );
};

export default ResetPassword;
