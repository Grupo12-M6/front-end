import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    HStack,
    Text,
} from "@chakra-ui/react"
  
import {
    useState,
    useEffect,
    useCallback,
    ForwardRefRenderFunction,
    forwardRef,
} from "react"
  
import { IconType } from "react-icons"
import { CgDanger } from "react-icons/cg"

interface InputProps extends ChakraInputProps {
    name: string
    label?: string
    error?: any
    icon?: IconType
    variant?: string
}
  
type InputVariationOptions = {
    [key: string]: string
}
  
const inputVariation: InputVariationOptions = {
    error: "alert.1",
    default: "grey.3",
    focus: "grey.1",
    filled: "grey.8",
}

const inputBgVariation: InputVariationOptions = {
    default: "grey.10",
    filled: "grey.8",
}
  
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, error = null, icon: Icon, label, variant, ...rest },
    ref) => {
    const [value, setValue] = useState("")
    const [variation, setVariation] = useState("default")
    const [variationBg, setVariationBg] = useState("default")
  
    useEffect(() => {
      if (error) {
        return setVariation("error")
      }
    }, [error])

    useEffect(() => {
        if (variant == "filled") {
          setVariationBg("filled")
          setVariation("filled")
        }
      }, [error])
  
    const handleInputFocus = useCallback(() => {
      if (!error) {
        setVariation("focus")
      }
    }, [error])
  
    const handleInputBlur = useCallback(() => {
      if (value.length > 1 && !error) {
        return setVariation("filled")
      }
    }, [error, value])
  
    return (
      <FormControl isInvalid={!!error}>
        {!!label && (
          <HStack justifyContent='space-between'>
            <FormLabel
              color='grey.1'
              fontSize='14px'
              fontWeight={500}
              fontFamily='inter'
              mb='0'
            >
              {label}
            </FormLabel>
            {error && (
              <Text
                fontFamily='Nunito'
                color='alert.1'
                fontSize='14px'
                fontWeight='semibold'
              >
                {error.message}
              </Text>
            )}
          </HStack>
        )}
        <InputGroup mt='5px'>
          {Icon && (
            <InputLeftElement color={inputVariation[variation]} mt='1'>
              <Icon />
            </InputLeftElement>
          )}
          <ChakraInput
            id={name}
            name={name}
            onChangeCapture={(e) => setValue(e.currentTarget.value)}
            onBlurCapture={handleInputBlur}
            onFocus={handleInputFocus}
            borderColor={inputVariation[variation]}
            color={inputVariation[variation]}
            bg={inputBgVariation[variationBg]}
            variant='outline'
            _hover={{ bgColor: "grey.8" }}
            _placeholder={{ color: "grey.3" }}
            _focus={{ bg: "grey.9" }}
            borderRadius='4px'
            fontSize="16px"
            size='lg'
            h='48px'
            w='100%'
            ref={ref}
            {...rest}
          />
          {error && (
            <InputRightElement pointerEvents='none' h='50px'>
              <CgDanger color='red' size='20' />
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    )
}
  
export const Input = forwardRef(InputBase)
