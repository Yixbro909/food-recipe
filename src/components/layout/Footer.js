import React from "react";
import facebook from "../../img/animated/facebook.gif";
import twitter from "../../img/animated/twitter.gif";
import gmail from "../../img/animated/gmail.gif";
import instagram from "../../img/icons/instagram.gif";
import whatsapp from "../../img/animated/whatsapp.gif";

const Footer = ({ styleIcons }) => {
  return (
    <footer className="starter-footer bg-light  mt-5 container-fluid">
      <section id="aboutus">
        <div className="row">
          <div className="col-lg-5 contact-us border-top rounded justify-content-center  align-item-center text-center border-danger border-4">
            <div className="fs-1 text-secondary text-uppercase text-center">
              CONTACT US
            </div>
            <div className="social-contact py-4 d-flex justify-content-center">
              <a href="" className="nav-link text-center" target="_blank">
                <img src={facebook} alt="" style={styleIcons} />
                <span className="text-muted">Facebook</span>
              </a>
              <a href="" className="nav-link text-center" target="_blank">
                <img src={twitter} alt="" style={styleIcons} />
                <span className="text-muted">Twitter</span>
              </a>
              <a href="" className="nav-link text-center" target="_blank">
                <img src={instagram} alt="" style={styleIcons} />
                <span className="text-muted">Instagram</span>
              </a>
              <a href="" className="nav-link text-center" target="_blank">
                <img src={gmail} alt="" style={styleIcons} />
                <span className="text-muted">Gmail</span>
              </a>
              <a href="" className="nav-link text-center" target="_blank">
                <img src={whatsapp} alt="" style={styleIcons} />
                <span className="text-muted">Whatsapp</span>
              </a>
            </div>
          </div>
          <div className="col-lg-7 about-us border-warning rounded  border-top border-4">
            <div className="fs-1 text-secondary text-center text-uppercase">
              About Us
            </div>
            <p className="text-muted mt-5 about-message">
              Thanks Y'all for been our customers all this while, if you got any
              issue with our services <strong>constact us </strong> and we will
              be happy to help you.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

Footer.defaultProps = {
  styleIcons: {
    width: "48px",
    height: "48px",
    // marginLeft: "10px",
  },
};
