import { Flex } from "@chakra-ui/react";

import { UseGetScreenWidth } from "../../hooks";
import { Header } from "../../components/Header";
import { HeaderMobile } from "../../components/Header/HeaderMobile";
import { FooterDesktop } from "../../components/Footer";
import { Background } from "../../components/Background";
import BoxGalleryImages from "../../components/BoxGalleryImages";
import BoxInfoAd from "../../components/BoxInfoAd/Index";
import BoxInfoSaller from "../../components/BoxInfoSaller";
import BoxCommentsAd from "../../components/BoxCommentsAd";
import BoxBannerAd from "../../components/BoxBannerAd";
import BoxDescAd from "../../components/BoxDescAd";

const Product = () => {
  const [, width] = UseGetScreenWidth();

  return (
    <Flex w="100vw" h="100vh" flexDirection="column">
      {width >= 768 ? <Header /> : <HeaderMobile />}
      {/* <Background /> */}
      {/* <BoxBannerAd imageLink="" /> */}
      {/* <BoxBannerAd imageLink="https://images.hellokids.com/_uploads/_tiny_galerie/200811/800x600-madagascar-2-wallpaper-gloria-source_vzc.jpg" /> */}
      {/* <BoxGalleryImages
        images={[
          "https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/ErH22boXIAA0OKu?format=jpg&name=4096x4096",
        ]}
      /> */}
      {/* <BoxInfoAd
        title="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
        year="2013"
        milles="0KM"
        price="00.000,00"
      /> */}
      {/* <BoxDescAd description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." /> */}
      {/* <BoxInfoSaller
        name="Samuel Leão"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's"
      /> */}
      {/* <BoxCommentsAd
        users={["Eliseu Brito", "Joãozinho", "Camila"]}
        comments={["3214", "13124", "teste"]}
      /> */}
      {/* <FooterDesktop /> */}
    </Flex>
  );
};

export default Product;
