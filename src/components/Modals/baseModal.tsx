import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { forwardRef, ReactNode } from "react"

// -----EXEMPLO DE USO-----
// const { isOpen, onOpen, onClose } = useDisclosure()
// <ModalBasic
// isOpen={isOpen}
// onClose={onClose}
// >
//   <FormControl>
//     <FormLabel>First name</FormLabel>
//     <Input ref={initialRef} placeholder='First name' />
//   </FormControl>
//   <Button colorScheme='blue' mr={3}>
//     Save
//   </Button>
//   <Button onClick={onClose}>Cancel</Button>
// <ModalBasic/>

interface IPropsModal {
  title?: string
  children: ReactNode | any
  isOpen: boolean
  onClose: () => void
}

export const ModalBasic = ({
  title,
  children,
  onClose,
  isOpen,
}: IPropsModal) => {
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent marginLeft='2' marginRight='2'>
          {title && (
            <ModalHeader
              color='grey.1'
              fontSize='16px'
              fontWeight={500}
              fontFamily='Lexend'
            >
              {title}
            </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}