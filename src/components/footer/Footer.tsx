import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
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
          url="http://localhost:3000/"
          title="Ricardo Manoel FullStack Developer Portfolio"
        >
          <LinkedinIcon />
        </LinkedinShareButton>
        <TwitterShareButton url="http://localhost:3000/">
          <TwitterIcon />
        </TwitterShareButton>
        <WhatsappShareButton url="http://localhost:3000/">
          <WhatsappIcon />
        </WhatsappShareButton>
        <TelegramShareButton url="http://localhost:3000/">
          <TelegramIcon />
        </TelegramShareButton>
        <EmailShareButton url="http://localhost:3000/">
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
