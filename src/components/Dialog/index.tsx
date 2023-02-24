import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

interface IDialogProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Dialog = ({ title, isOpen, onClose, children }: IDialogProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height='max-content' marginLeft='2' marginRight='2'>
          <ModalHeader
            fontFamily='Lexend'
            fontSize='xs'
            fontWeight='600'
            display='flex'
            justifyContent='space-between'
          >
            {title}
            <ModalCloseButton size='xs' position='static' />
          </ModalHeader>
          <ModalBody paddingBottom='4'>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
