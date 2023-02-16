import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      1: "#4529E6",
      2: "#5126EA",
      3: "#B0A6F0",
      4: "#EDEAFD",
    },
    grey: {
      0: "#0B0D0D",
      1: "#212529",
      2: "#495057",
      3: "#868E96",
      4: "#ADB5BD",
      5: "#CED4DA",
      6: "#DEE2E6",
      7: "#E9ECEF",
      8: "#F1F3F5",
      9: "#F8F9FA",
      10: "#FDFDFD",
    },
    alert: {
      1: "#CD2B31",
      2: "#FDD8D8",
      3: "#FFE5E5",
    },
    success: {
      1: "#18794E",
      2: "#CCEBD7",
      3: "#DDF3E4",
    },
    random: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#5700E3",
      12: "#30007D",
    },
  },
  fonts: {
    heading: "Lexend",
    body: "Inter",
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
    "4xl": "2.75rem",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "grey.2",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontSize: "0.875rem",
        fontWeight: "600",
        borderRadius: "4px",
      },
      variants: {
        disable: {
          bg: "grey.5",
          color: "white",
        },
        brandDisable: {
          bg: "brand.3",
          color: "brand.4",
        },
        brandOpacity: {
          bg: "brand.4",
          color: "brand.1",
        },
        light: {
          bg: "grey.10",
          color: "grey.1",
        },
        grey: {
          bg: "grey.0",
          color: "white",
          _hover: {
            bg: "grey.1",
          },
        },
        negative: {
          bg: "grey.6",
          color: "grey.2",
          _hover: {
            bg: "grey.5",
          },
        },
        brand1: {
          bg: "brand.1",
          color: "white",
          _hover: {
            bg: "brand.2",
          },
        },
        outlineLight: {
          color: "grey.10",
          border: "2px",
          borderColor: "grey.10",
          _hover: {
            bg: "grey.10",
            color: "grey.1",
          },
        },
        outline1: {
          color: "grey.0",
          border: "2px",
          borderColor: "grey.0",
          _hover: {
            bg: "grey.1",
            color: "grey.10",
            borderColor: "grey.1",
          },
        },
        outline2: {
          color: "grey.0",
          border: "2px",
          borderColor: "grey.4",
          _hover: {
            bg: "grey.10",
            color: "grey.1",
            borderColor: "grey.1",
          },
        },
        outlineBrand1: {
          color: "brand.1",
          border: "2px",
          borderColor: "brand.1",
          _hover: {
            bg: "brand.4",
          },
        },
        link: {
          bg: "transparent",
          color: "grey.0",
          _hover: {
            bg: "grey.8",
          },
        },
        alert: {
          bg: "alert.3",
          color: "alert.1",
          _hover: {
            bg: "alert.2",
          },
        },
        success: {
          bg: "success.3",
          color: "success.1",
          _hover: {
            bg: "success.2",
          },
        },
      },
    },
  },
})
