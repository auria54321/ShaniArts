import React from 'react';
import {ReactComponent as InstagramIcon} from '../../assets/instagramicon.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/youtubeicon.svg';

import './footer.styles.css';

const Footer = () => (
    <div className='footer-container'>
        <div>Follow Me: 
            <a href='https://www.instagram.com/shanishabo/'><InstagramIcon className='icons'/></a>
            <a href='https://www.youtube.com/channel/UC707IkeDRoLmcGN_GQ7c5_A/'><YoutubeIcon className='icons'/></a>
            <span className='sb'>SHANI - SHABO</span>
        </div> 
    </div>
)

export default Footer;