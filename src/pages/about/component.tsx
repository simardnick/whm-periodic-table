import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { aboutEn, aboutFr } from "./about-data";

import "./styles.scss";

export interface IAboutPageProps extends RouteComponentProps {
  isFrench: boolean;
}

export const AboutPage = ({ isFrench }: IAboutPageProps) => {
  const lang = isFrench ? aboutFr : aboutEn;
  const { title, content } = lang;
  return (
    <Box className="about-page">
      <h1>{title}</h1>
      <p>{content}</p>
    </Box>
  );
};
