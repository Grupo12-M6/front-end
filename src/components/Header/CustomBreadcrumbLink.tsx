import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

interface ILinkProps {
  href: string
  content: string
}

export const CustomBreadcrumbLink = ({ href, content }: ILinkProps) => {
  return (
    <BreadcrumbItem>
      <BreadcrumbLink
        href={href}
        textAlign='left'
        color='grey.2'
        fontSize='xs'
        fontWeight='600'
        fontFamily='body'
        _hover={{ color: "brand.1" }}
      >
        {content}
      </BreadcrumbLink>
    </BreadcrumbItem>
  )
}
