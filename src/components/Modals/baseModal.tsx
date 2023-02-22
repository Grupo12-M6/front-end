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
// const initialRef = React.useRef(null)
// const finalRef = React.useRef(null)
// <ModalBasic
// initialRef={initialRef}
// finalRef={finalRef}
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
  initialRef: any
  finalRef: any
}

const BasicModal = ({
  title,
  children,
  onClose,
  isOpen,
  initialRef,
  finalRef,
}: IPropsModal) => {
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
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

export const ModalBasic = forwardRef(BasicModal)
