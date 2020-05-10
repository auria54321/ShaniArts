import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import BurgerIcon from "../burger-icon/burger-icon.component";
import { ReactComponent as InstagramIcon } from "../../assets/instagramicon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/youtubeicon.svg";

import "./header.styles.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const show = active ? "show" : "";

  return (
    <div>
      <div className={`header ${show}`}>
        <div onClick={() => setActive(!active)}>
          <BurgerIcon active={active} />
        </div>
        <div className={`option ${show}`}>
          <Link to="/shop" activeClassName="active">
            Shop
          </Link>
        </div>
        <div className={`option ${show}`}>
          <Link to="/commissions" activeClassName="active">
            Commissions
          </Link>
        </div>
        <div className={`option ${show}`}>
          <Link to="/delivery" activeClassName="active">
            Delivery{" "}
          </Link>
        </div>
        <div className={`option ${show}`}>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </div>
        <div className={`option ${show}`}>
          <Link to="/contacts" activeClassName="active">
            Contacts
          </Link>
        </div>
        <div className={`option ${show}`} id="icons">
          <a href="https://www.instagram.com/shanishabo/">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/channel/UC707IkeDRoLmcGN_GQ7c5_A/">
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Header;
