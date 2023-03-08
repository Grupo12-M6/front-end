import { Box, Text, Avatar, HStack, Icon } from "@chakra-ui/react"
import { IComment } from "../../interfaces/comments"

interface IBoxCommentsProduct {
  comments: IComment[]
}

const BoxCommentsAd = ({ comments }: IBoxCommentsProduct) => {
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
              <HStack spacing={2}>
                <Avatar size='sm' name={item.user.name} src='' />
                {/* <Avatar size="sm" name={item.user.name} src="" /> */}
                <HStack spacing={2}>
                  <Text fontStyle='fonts.body' color='grey.1' fontWeight='500'>
                    {item.user.name}
                  </Text>
                  {/* "•" */}
                  <Text>• {text}</Text>
                </HStack>
              </HStack>
              <Text fontStyle='fonts.body' color='grey.2' fontWeight='400'>
                {item.content}
              </Text>
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
