import { Box, Text, Avatar, Button, Link } from "@chakra-ui/react"

interface IBoxInfoSallerProps {
  name: string
  description: string
  id: string
}

const BoxInfoSaller = ({ name, description, id }: IBoxInfoSallerProps) => {
  return (
    <Box
      p='8'
      gap='4'
      backgroundColor='grey.10'
      display='flex'
      width='100%'
      flexDirection='column'
      alignItems='center'
      borderRadius='4px'
    >
      <Avatar size='lg' name={name} src='' />
      <Text color='grey.1' fontWeight='600' fontFamily='Lexend' fontSize='sm'>
        {name}
      </Text>
      <Text fontWeight='400' fontSize='16px' textAlign='center'>
        {description}
      </Text>
      <Link
        href={"/users/" + id}
        display='flex'
        width='100%'
        justifyContent='center'
        _hover={{
          outline: 'unset'}}
      >
        <Button
        fontSize='xs'
          variant='grey1'
        >
          Ver Todos anuncios
        </Button>
      </Link>
    </Box>
  )
}

export default BoxInfoSaller
