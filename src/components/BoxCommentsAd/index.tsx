import {
  Box,
  Text,
  Avatar,
  HStack,
  Button,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { BiEdit, BiTrash } from "react-icons/bi"
import { useAd } from "../../contexts/AdContext"
import { useAuth } from "../../contexts/AuthContext"
import { UseGetScreenWidth } from "../../hooks"
import { IComment } from "../../interfaces/comments"

interface IBoxCommentsProduct {
  comments: IComment[]
}

const BoxCommentsAd = ({ comments }: IBoxCommentsProduct) => {
  const [isOnEdit, setIsOnEdit] = useState(false)
  const [idOnEdit, setIdOnEdit] = useState("")
  const [updatedComment, setUpdatedComment] = useState("")

  const [, width] = UseGetScreenWidth()

  const { user } = useAuth()
  const { updateComment, deleteComment } = useAd()

  const submitChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const data = { content: updatedComment }
    updateComment(data, idOnEdit)
    setIsOnEdit(false)
  }

  return (
    <Box
      p='8'
      backgroundColor='grey.10'
      display='flex'
      flexDirection='column'
      gap='6'
      borderRadius='4px'
    >
      <Text
        fontStyle='fonts.heading'
        color='grey.1'
        fontWeight='600'
        fontSize='sm'
        fontFamily='Lexend'
      >
        Comentários
      </Text>
      {comments.length > 0 ? (
        comments.map((item, indice) => {
          // console.log(item.createdAt);
          let test = item.createdAt.toString()
          let text = test.slice(0, 10)

          return (
            <Box display='flex' flexDirection='column' gap='16px' key={indice}>
              {width >= 425 ? (
                <HStack justifyContent='space-between'>
                  <HStack spacing={2}>
                    <Avatar size='sm' name={item.user.name} src='' />
                    {/* <Avatar size="sm" name={item.user.name} src="" /> */}
                    <HStack spacing={2}>
                      <Text
                        fontStyle='fonts.body'
                        color='grey.1'
                        fontWeight='500'
                      >
                        {item.user.name}
                      </Text>
                      {/* "•" */}
                      <Text fontSize='.875rem'> • {text}</Text>
                    </HStack>
                  </HStack>
                  {user?.id == item.user.id && (
                    <HStack>
                      <Button
                        p='0'
                        size='sm'
                        bgColor='transparent'
                        _hover={{ bgColor: "transparent", color: "grey.1" }}
                        onClick={() => {
                          setIdOnEdit(item.id)
                          setIsOnEdit(!isOnEdit)
                        }}
                      >
                        <BiEdit />
                      </Button>
                      <Button
                        p='0'
                        size='sm'
                        bgColor='transparent'
                        _hover={{ bgColor: "transparent", color: "grey.1" }}
                        onClick={() => deleteComment(item.id)}
                      >
                        <BiTrash />
                      </Button>
                    </HStack>
                  )}
                </HStack>
              ) : (
                <VStack alignItems='flex-start' paddingBottom='4'>
                  <HStack w='100%' justifyContent='space-between'>
                    <HStack spacing={2}>
                      <Avatar size='sm' name={item.user.name} src='' />
                      {/* <Avatar size="sm" name={item.user.name} src="" /> */}
                      <Text
                        fontStyle='fonts.body'
                        color='grey.1'
                        fontWeight='500'
                      >
                        {item.user.name}
                      </Text>
                    </HStack>
                    {user?.id == item.user.id && (
                      <HStack>
                        <Button
                          p='0'
                          size='sm'
                          bgColor='transparent'
                          _hover={{ bgColor: "transparent", color: "grey.1" }}
                          onClick={() => {
                            setIdOnEdit(item.id)
                            setIsOnEdit(!isOnEdit)
                          }}
                        >
                          <BiEdit />
                        </Button>
                        <Button
                          p='0'
                          size='sm'
                          bgColor='transparent'
                          _hover={{ bgColor: "transparent", color: "grey.1" }}
                          onClick={() => deleteComment(item.id)}
                        >
                          <BiTrash />
                        </Button>
                      </HStack>
                    )}
                  </HStack>
                  <Text fontSize='.875rem'> {text}</Text>
                </VStack>
              )}
              {isOnEdit && item.id == idOnEdit ? (
                <Box position='relative'>
                  <Textarea
                    resize='none'
                    p='4'
                    w='100%'
                    color='grey.2'
                    fontWeight='400'
                    fontSize='xs'
                    defaultValue={item.content}
                    onChange={(e) => setUpdatedComment(e.target.value)}
                  ></Textarea>
                  <Button
                    fontSize='12px'
                    position='absolute'
                    zIndex='10'
                    right='2'
                    bottom='2'
                    height='30px'
                    type='submit'
                    variant='brand1'
                    onClick={(e) => submitChange(e)}
                  >
                    Salvar
                  </Button>
                </Box>
              ) : (
                <Text fontStyle='fonts.body' color='grey.2' fontWeight='400'>
                  {item.content}
                </Text>
              )}
            </Box>
          )
        })
      ) : (
        <Text> Sem comentários </Text>
      )}
    </Box>
  )
}

export default BoxCommentsAd
