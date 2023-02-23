import { MenuItem } from "@chakra-ui/react"

interface ICustomMenuItemProps {
  functionOnClick: () => void
  content: string
}

export const CustomMenuItem = ({
  functionOnClick,
  content,
}: ICustomMenuItemProps) => {
  return (
    <MenuItem
      as='button'
      color='grey.2'
      fontSize='xs'
      textAlign='left'
      fontWeight='400'
      fontFamily='body'
      onClick={() => functionOnClick()}
    >
      {content}
    </MenuItem>
  )
}
