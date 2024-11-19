import { useContext, createContext } from "react";
import { useLangContext } from "../LangContext";
import phone from "../../assets/phone.svg?react";
import telegram from "../../assets/telegram.svg?react";
import email from "../../assets/email.svg?react";
import linkedin from "../../assets/linkedin.svg?react";
import location from "../../assets/location.svg?react";
import styled from "styled-components";
import { useColorContext } from "../ColorContext";

const Phone = styled(phone)`
  width: 45px;
  height: 45px;
  path {
    fill: ${({ color }) => color};
  }
`;
const Telegram = styled(telegram)`
  width: 45px;
  height: 45px;
  path {
    fill: ${({ color }) => color};
  }
`;
const Email = styled(email)`
  width: 45px;
  height: 45px;
  path {
    fill: ${({ color }) => color};
  }
`;

const Linkedin = styled(linkedin)`
  width: 45px;
  height: 45px;
  path {
    fill: ${({ color }) => color};
  }
  rect {
    fill: ${({ color }) => color};
  }
`;

const Location = styled(location)`
  width: 45px;
  height: 45px;
  path {
    stroke: ${({ color }) => color};
  }
`;

const ContactContext = createContext();

export const useContactContexxt = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
  const [data, language] = useLangContext();
  const [color] = useColorContext();

  const contactUz = {
    title: "Aloqa",
    data: [
      {
        id: 1,
        icon: <Phone color={color} />,
        title: "Telefon",
        link: "tel: +998975181203",
        linkFront: "+998975181203",
      },
      {
        id: 2,
        icon: <Telegram color={color} />,
        title: "Telegram",
        link: "https://t.me/qadambayev_12_03",
        linkFront: "@qadambayev",
      },
      {
        id: 3,
        icon: <Location color={color} />,
        title: "Ofis",
        link: null,
        linkFront: "Uzb, Tashkent",
      },
      {
        id: 4,
        icon: <Email color={color} />,
        title: "Email",
        link: "mailto: qadambayevmominjon003@gmail.com",
        linkFront: "qadambayevmominjon003@gmail.com",
      },
      {
        id: 5,
        icon: <Linkedin color={color} />,
        title: "Linkedin",
        link: "https://www.linkedin.com/in/mo-minjon-qadamboyev-4a4063312/",
        linkFront: "linkedin",
      },
    ],
  };

  const contactRu = {
    title: "Контакт",
    data: [
      {
        id: 1,
        icon: <Phone color={color} />,
        title: "Телефон",
        link: "tel: +99897 518 12 03",
        linkFront: "+99897 518 12 03",
      },
      {
        id: 2,
        icon: <Telegram color={color} />,
        title: "Телеграм",
        link: "https://t.me/qadambayev_12_03",
        linkFront: "@qadambayev",
      },
      {
        id: 3,
        icon: <Location color={color} />,
        title: "Офис",
        link: null,
        linkFront: "Uzb, Tashkent",
      },
      {
        id: 4,
        icon: <Email color={color} />,
        title: "Электронная почта",
        link: "mailto: qadamboyevmominjon003@gmail.com",
        linkFront: "qadamboyevmominjon003@gmail.com",
      },
      {
        id: 5,
        icon: <Linkedin color={color} />,
        title: "Линкедин",
        link: "https://www.linkedin.com/in/mo-minjon-qadamboyev-4a4063312/",
        linkFront: "linkedin",
      },
    ],
  };

  const contactEn = {
    title: "Contact",
    data: [
      {
        id: 1,
        icon: <Phone color={color} />,
        title: "Telefon",
        link: "tel: +99897 518 12 03",
        linkFront: "+99897 518 12 03",
      },
      {
        id: 2,
        icon: <Telegram color={color} />,
        title: "Telegram",
        link: "https://t.me/qadambayev_12_03",
        linkFront: "@qadambayev",
      },
      {
        id: 3,
        icon: <Location color={color} />,
        title: "Office",
        link: null,
        linkFront: "Uzb, Tashkent",
      },
      {
        id: 4,
        icon: <Email color={color} />,
        title: "Email",
        link: "mailto: qadamboyevmominjon003@gmail.com",
        linkFront: "qadamboyevmominjon003@gmail.com",
      },
      {
        id: 5,
        icon: <Linkedin color={color} />,
        title: "Linkedin",
        link: "https://www.linkedin.com/in/mo-minjon-qadamboyev-4a4063312/",
        linkFront: "linkedin",
      },
    ],
  };

  const getContactLang = (prop) => {
    const obj = {
      uz: contactUz,
      ru: contactRu,
      en: contactEn,
    };
    return obj[prop] || obj[en];
  };

  const contactData = getContactLang(language);

  return (
    <ContactContext.Provider value={[contactData]}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
