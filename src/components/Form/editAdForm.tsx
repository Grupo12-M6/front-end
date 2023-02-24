import { useNavigate } from "react-router-dom";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";

import { Input } from "./input";

export const EditAdForm = () => {
  const navigate = useNavigate();

  const handlePatch = (data: any) => {}; //fazer a interface e função
  const handleDelete = (data: any) => {}; //fazer a interface e função
  const handleCreateMoreImages = (data: any) => {}; //fazer a interface e função

  return (
    <Flex
      as="form"
      w="100%"
      h="60%"
      flexDirection="column"
      justifyContent="space-between"
      //onSubmit={handlePatch()}
    >
      <Text>Tipo de anuncio</Text>
      <Flex flexDirection="row" w="100%" justifyContent="space-between">
        <Button variant="brand1">Venda</Button>
        <Button variant="brand1">Leilão</Button>
      </Flex>

      <Text>Informações do veículo</Text>
      <Input name="title" placeholder="" label="Título" />

      <Flex flexDirection="row" w="100%" justifyContent="space-between">
        <Input name="year" placeholder="" label="Ano" />
        <Input name="km" placeholder="" label="Quilometragem" />
        <Input name="price" placeholder="" label="Preço" />
      </Flex>

      <Input name="description" placeholder="" label="Descrição" type="text" />

      <Text>Tipo de veículo</Text>
      <Flex flexDirection="row" w="100%" justifyContent="space-between">
        <Button variant="brand1">Carro</Button>
        <Button variant="brand1">Moto</Button>
      </Flex>

      <Text>Publicado</Text>
      <Flex flexDirection="row" w="100%" justifyContent="space-between">
        <Button variant="brand1">Sim</Button>
        <Button variant="brand1">Não</Button>
      </Flex>

      <Input name="imagePrincipal" placeholder="" label="Imagem de capa" />
      <Input name="galery" placeholder="" label="1º Imagem da galeria" />
      <Button variant="brand1">Adicionar campo para imagem da galeria</Button>
      <Flex>
        <Button variant="brand1">Excluir anúncio</Button>
        <Button type="submit" variant="brand1">
          Salvar alterações
        </Button>
      </Flex>
    </Flex>
  );
};
