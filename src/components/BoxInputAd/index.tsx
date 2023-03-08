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
  VStack,
  Flex,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useAd } from "../../contexts/AdContext"

interface IBoxInputComment {
  name: string | ""
  active: boolean
}

const BoxInputAd = ({ name, active }: IBoxInputComment) => {
  const { createCommentForOneAd, setUpdate } = useAd()
  const { id } = useParams()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  // useEffect(() => {
  //   setUpdate(1 + 1);
  // }, [handleSubmit]);
  return (
    <Box
      p='8'
      w='100%'
      backgroundColor='grey.10'
      display='flex'
      flexDirection='column'
      position='relative'
      borderRadius='4px'
    >
      <VStack gap='4' alignItems='flex-start' w='100%'>
        <HStack spacing={2} display='flex'>
          <Avatar size='sm' name={name} src='' />
          <Text
            fontStyle='fonts.body'
            color='grey.1'
            fontWeight='500'
            fontSize='14px'
          >
            {name}
          </Text>
        </HStack>
        <Flex
          w='100%'
          as='form'
          onSubmit={handleSubmit((data) =>
            createCommentForOneAd(id, data.comment)
          )}
        >
          <Textarea
            w='100%'
            p='4'
            minH='150px'
            color='grey.1'
            fontSize='16px'
            disabled={active}
            borderRadius='4px'
            placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
            resize='none'
            position='relative'
            _placeholder={{
              fontSize: "16px",
              fontWeight: "400",
            }}
            {...register("comment")}
          />
          {active === false ? (
            <Button
              disabled={active}
              fontSize='12px'
              position='absolute'
              zIndex='10'
              right='10'
              bottom='10'
              height='30px'
              type='submit'
              variant='brand1'
            >
              Comentar
            </Button>
          ) : (
            <Tooltip label={"Faça login para Comentar"} fontSize='12px'>
              <Button
                isDisabled
                fontSize='12px'
                right='8'
                bottom='2'
                borderRadius='4px'
                height='30px'
                backgroundColor='brand.1'
                type='submit'
                color='grey.10'
              >
                Comentar
              </Button>
            </Tooltip>
          )}
        </Flex>
      </VStack>
    </Box>
  )
}

export default BoxInputAd
