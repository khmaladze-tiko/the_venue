import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_red">
        <Fade triggerOnce delay={500}>
            <div className="font_rightous footer_logo_venue">The venue</div>
            <div className="footer_copyright">The venue 2021 all right reserved</div>
        </Fade>
    </footer>
  )
};

export default Footer;