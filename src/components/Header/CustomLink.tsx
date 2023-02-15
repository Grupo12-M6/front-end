import { Link } from "@chakra-ui/react"

interface ILinkProps {
  href: string
  content: string
}

export const CustomLink = ({ href, content }: ILinkProps) => {
  return (
    <Link
      href={href}
      textAlign='left'
      color='grey.2'
      fontSize='xs'
      fontWeight='600'
      fontFamily='body'
      _hover={{ color: "brand.1" }}
    >
      {content}
    </Link>
  )
}
