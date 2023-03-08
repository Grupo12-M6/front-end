import { Image, Text, Box } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { IImage } from "../../interfaces/images"
import { ModalBasic } from "../Modals/baseModal"
interface IBoxGalleryImagesProps {
  images: IImage[]
}

const BoxGalleryImages = ({ images }: IBoxGalleryImagesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageOnFocus, setImageOnFocus] = useState<IImage>({} as IImage)

  return (
    <Box
      w='100%'
      p='8'
      gap='6'
      borderRadius='4px'
      backgroundColor='grey.10'
      display='flex'
      flexDirection='column'
    >
      <Text
        colorScheme='fonts.body'
        fontSize='sm'
        color='grey.1'
        fontWeight='600'
        fontFamily='Lexend'
      >
        Fotos
      </Text>
      {images[0] ? (
        <Box
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          gap='6'
          justifyContent='flex-start'
        >
          {images.map((items, index) => {
            return (
              <Box
                minW='30px'
                minH='30px'
                maxW='70px'
                maxH='70px'
                borderRadius='4px'
                display='flex'
                key={index}
              >
                <Image
                  src={items.url}
                  width='100%'
                  borderRadius='4px'
                  onClick={() => {
                    setImageOnFocus(items)
                    onOpen()
                  }}
                />
              </Box>
            )
          }, 6)}
        </Box>
      ) : (
        <Box
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          gap='5px'
          rowGap='30px'
          justifyContent='space-between'
          marginLeft='22px'
          marginRight='22px'
        >
          SEM IMAGEM
        </Box>
      )}
      <ModalBasic
        title='Foto'
        children={
          <Image width='100%' src={imageOnFocus.url} borderRadius='4px' />
        }
        isOpen={isOpen}
        onClose={onClose}
      ></ModalBasic>
    </Box>
  )
}

export default BoxGalleryImages
