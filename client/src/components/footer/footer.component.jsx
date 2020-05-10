import React from "react";
import { ReactComponent as InstagramIcon } from "../../assets/instagramicon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/youtubeicon.svg";

import "./footer.styles.scss";

const Footer = () => (
  <div>
    <div className="footer-container">
      <div> &#169; Shani Shabo</div>
      <div>
        <a href="https://www.instagram.com/shanishabo/">
          <InstagramIcon className="icons" />
        </a>
        <a href="https://www.youtube.com/channel/UC707IkeDRoLmcGN_GQ7c5_A/">
          <YoutubeIcon className="icons" />
        </a>
      </div>
    </div>
    <img
      alt="bg"
      className="bg-image"
      src="https://i2.wp.com/background4free.com/download/blue_yellow_light_115379772.jpg?zoom=1&w=1200&q=90"
    />
  </div>
);

export default Footer;
