import * as yup from "yup"

export const signInSchema = yup.object().shape({
  email: yup.string().required("Email necessário").email("Email inválido"),
  password: yup.string().required("Senha necessária"),
})

export const registerAdsSchema = yup.object().shape({
  title: yup.string().required("Title é obrigatório"),
  // adType: yup.string().required("É obrigatório selecionar o tipo de anúncio"),
  year: yup.number().required("Ano é obrigatório"),
  mileage: yup.number().required("Quilometragem é obrigatório"),
  price: yup.number().required("Preço é obrigatório"),
  description: yup.string().required("É necessário inserir uma descrição"),
  // motorType: yup.string().required("É obrigatório selecionar o tipo de veiculo"),
  images: yup.array().of(
    yup.object().shape({
      url: yup.string()
    })
  )
})
