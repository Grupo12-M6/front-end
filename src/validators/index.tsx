import * as yup from "yup"

export const signInSchema = yup.object().shape({
  email: yup.string().required("Email necessário").email("Email inválido"),
  password: yup.string().required("Senha necessária"),
})

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome necessário"),
  email: yup.string().required("Email necessário").email("Email inválido"),
  cpf: yup.string().required("CPF necessário"),
  phoneNumber: yup.string().required("Celular necessário"),
  birthday: yup.string().required("Aniversário necessário"),
  description: yup.string().required("Descrição necessária").max(400, 'Tamanho máximo de caracteres atingido'),
  cep: yup.string().required("CEP necessário"),
  state: yup.string().required("Estado necessário").max(2, 'Apenas abreviação'),
  city: yup.string().required("Cidade necessária"),
  street: yup.string().required("Rua necessária"),
  number: yup.number().required("Número necessário").typeError('Número inválido'),
  complement: yup.string(),
  isSeller: yup.string().required("Tipo de conta necessário"),
  password: yup.string().required("Senha necessária"),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Senhas precisam ser iguais')

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
      url: yup.string(),
    })
  ),
})
