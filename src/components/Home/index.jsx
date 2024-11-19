import React from "react";
import img from "../../assets/jasco1.jpg";
import { Container, Icons, Img, Link } from "./style";
import { useLangContext } from "../../context/LangContext";
import { useColorContext } from "../../context/ColorContext";
import { UseModeContext } from "../../context/ModeContenxt";

const Home = () => {
  const [data, language, setLanguage, main] = useLangContext();
  const [color] = useColorContext();
  const [mode] = UseModeContext();
  return (
    <Container data-aos="zoom-in">
      <Img src={img} color={color} />
      <div className="title">{main?.name}</div>
      <div className="desc">{main?.job}</div>
      <div className="links">
        <Link target="_blank" to="https://github.com/qadambayev1203/">
          <Icons.Github color={color} />
        </Link>
        
        <Link target="_blank" to="mailto: qadambayevmominjon003@gmail.com">
          <Icons.Email color={color} />
        </Link>
        <Link target="_blank" to="https://t.me/qadambayev_12_03">
          <Icons.Telegram color={color} />
        </Link>
        <Link target="_blank" to="https://instagram.com/qadamboyev_12_03">
          <Icons.Instagram color={color} />
        </Link>
        <Link target="_blank" to="https://twitter.com/qadamboyev_1203">
          <Icons.Twitter color={color} />
        </Link>
        <Link target="_blank" to="tel: +998975181203">
          <Icons.Phone color={color} />
        </Link>
       
      </div>
    </Container>
  );
};

export default Home;
