import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { FooterShareBtnsText, FooterText, StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <FooterShareBtnsText>Share with your friends</FooterShareBtnsText>
        <LinkedinShareButton
          url="https://ricardoham.github.io/"
          title="Ricardo Manoel FullStack Developer Portfolio"
        >
          <LinkedinIcon />
        </LinkedinShareButton>
        <TwitterShareButton url="https://ricardoham.github.io/">
          <TwitterIcon />
        </TwitterShareButton>
        <WhatsappShareButton url="https://ricardoham.github.io/">
          <WhatsappIcon />
        </WhatsappShareButton>
        <TelegramShareButton url="https://ricardoham.github.io/">
          <TelegramIcon />
        </TelegramShareButton>
        <EmailShareButton url="https://ricardoham.github.io/">
          <EmailIcon />
        </EmailShareButton>
      </div>
      <FooterText>
        Developed with ❤️ by <b>@ricardoham</b>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
