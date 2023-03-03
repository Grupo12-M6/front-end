import {
  Box,
  Text,
  Avatar,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Textarea,
  Alert,
  AlertIcon,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAd } from "../../contexts/AdContext";

interface IBoxInputComment {
  name: string | "";
  active: boolean;
}

const BoxInputAd = ({ name, active }: IBoxInputComment) => {
  const { createCommentForOneAd, setUpdate } = useAd();
  const { id } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  // useEffect(() => {
  //   setUpdate(1 + 1);
  // }, [handleSubmit]);
  return (
    <Box
      backgroundColor="grey.10"
      marginBottom="36px"
      display="flex"
      flexDirection="column"
      position="relative"
      gap="28px"
    >
      <Box marginLeft="22px" marginRight="22px">
        <HStack spacing={2} display="flex" marginTop="37px" marginBottom="20px">
          <Avatar size="sm" name={name} src="" />
          <Text
            fontStyle="fonts.body"
            color="grey.1"
            fontWeight="500"
            fontSize="14px"
          >
            {name}
          </Text>
        </HStack>
        <form
          onSubmit={handleSubmit((data) =>
            createCommentForOneAd(id, data.comment)
          )}
        >
          <Textarea
            disabled={active}
            borderRadius="4px"
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            height="100px"
            resize="none"
            position="relative"
            _placeholder={{
              fontSize: "12px",
              fontWeight: "400",
            }}
            {...register("comment")}
          />
          {active === false ? (
            <Button
              disabled={active}
              fontSize="12px"
              position="absolute"
              right="8"
              bottom="2"
              borderRadius="4px"
              height="30px"
              backgroundColor="brand.1"
              type="submit"
              color="grey.10"
            >
              Comentar
            </Button>
          ) : (
            <Tooltip label={"Faça login para Comentar"} fontSize="12px">
              <Button
                isDisabled
                fontSize="12px"
                position="absolute"
                right="8"
                bottom="2"
                borderRadius="4px"
                height="30px"
                backgroundColor="brand.1"
                type="submit"
                color="grey.10"
              >
                Comentar
              </Button>
            </Tooltip>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default BoxInputAd;
