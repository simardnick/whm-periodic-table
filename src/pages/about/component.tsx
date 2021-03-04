import { Box, Button } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { aboutEn, aboutFr } from "./about-data";

import "./styles.scss";

export interface IAboutPageProps extends RouteComponentProps {
  isFrench: boolean;
}

export const AboutPage = ({ isFrench, history }: IAboutPageProps) => {
  const lang = isFrench ? aboutFr : aboutEn;
  const { title, content, subtitle2, content2, buttonText } = lang;
  return (
    <Box className="about-page">
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
      <br />
      <br />
      <h3>{subtitle2}</h3>
      <p dangerouslySetInnerHTML={{ __html: content2 }}></p>
      <Button className="donate-button" onClick={() => history.push("/donate")}>
        {buttonText}
      </Button>
    </Box>
  );
};
