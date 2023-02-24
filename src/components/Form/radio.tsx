import { Box, useRadio } from "@chakra-ui/react"


export const RadioCard = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    return (
      <Box as='label'>
        <input {...getInputProps({})} />
        <Box
          {...getCheckboxProps()}
          cursor='pointer'
          bgColor= "#FFFFFF" 
          color= "grey.0"

          _hover={{ bgColor: "#4529E6" , color: "white", border: "2px", borderRadius: "4px", borderColor:"#4529E6"}}
          _checked={{ bgColor: "#4529E6" , color: "white", border: "2px", borderRadius: "4px", borderColor:"#4529E6"}}
          fontFamily="inter"
          fontSize="16px"
          fontWeight="600"
          border="2px"
          borderColor="grey.4"
          borderRadius="4px"
          px={66}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }