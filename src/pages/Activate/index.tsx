import {
  Box,
  Button,
  Flex,
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

const Activate = () => {
  const [, width] = UseGetScreenWidth();
  const { activateAccount } = useAuth();
  const { id } = useParams();

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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="25px"
        >
          <MdMarkEmailRead size="100px" color="green" />
          <Text fontWeight="600">Conta ativada com sucesso!</Text>
        </Box>
        {/* <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="25px"
        >
          <BiError size="100px" color="orange" />
          <Text fontWeight="600">Esta conta já foi ativada!</Text>
        </Box> */}
        {/* <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="25px"
        >
          <TbFaceIdError size="100px" color="red" />
          <Text fontWeight="600">Token de ativação inválido</Text>
        </Box> */}
      </Flex>
      <FooterDesktop />
    </Flex>
  );
};

export default Activate;
