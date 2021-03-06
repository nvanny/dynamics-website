import React, { Component } from 'react';
import '../css/SocialFollow.css';
import '../css/Global.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NoRightClickImg from '../components/NoRightClickImg';
import mainBanner from '../images/home/Facebook_Cover_2019.png';

const fbLink = "https://www.facebook.com/DynamicsPerformanceTeam/";

const igLink = "https://www.instagram.com/dynamicsperformanceteam/?hl=en";

const mailLink = "mailto:dynamicsperformanceteam@gmail.com?subject=Hi, Dynamics Performance Team!";

const mailChimpLink = "https://gmail.us4.list-manage.com/subscribe/post?u=d1eeb18ee37a90dc8b1251b7b&amp;id=6432994186";

const youtubeLink = "https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g";

const yelpLink = "https://www.yelp.com/biz/dynamics-performance-team-san-jose";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () => 
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div>
      {status === "sending" && <div className="Newsletter-Feedback" style={{ color: "blue" }}>Sending...</div>}
      {status === "error" && (
        <div
          className="Newsletter-Feedback"
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: "Error: " + message }}
        />
      )}
      {status === "success" && (
        <div
          className="Newsletter-Feedback"
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <input
        className="subscribe-input"
        ref={node => (name = node)}
        type="text"
        placeholder="Name..."
      />
      <input
        className="subscribe-input"
        ref={node => (email = node)}
        type="email"
        placeholder="Email..."
      />

      <br />
      <button className="submit-button" onClick={submit}>
        Subscribe!
      </button>
      <NoRightClickImg imgClassName="subscribe-img" src={mainBanner} disableEnlarging={true}/>
    </div>
  );
};

const customStyle = {
  overlay: {zIndex: 10}
};

class SocialFollow extends Component{
    constructor(props) {
      super(props);
      this.state= {
        showModal: false
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
      this.setState({ showModal: true });
    }

    handleCloseModal() {
      this.setState({ showModal: false });
    }

    render(){
        return(
            <div className="Social Pink-Bullets">
              <ul>

              <li>
                  <a href={youtubeLink} title="Youtube" target="_blank" rel="noopener noreferrer">
                    <img className="youtube-iconImg" src={require("../images/youtubeIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>

              <li>
                  <a href={yelpLink} title="Yelp" target="_blank" rel="noopener noreferrer">
                    <img className="yelp-iconImg" src={require("../images/yelpIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>

              <li>
                  <a href={fbLink} title="Facebook" target="_blank" rel="noopener noreferrer">
                    <img className="facebook-iconImg" src={require("../images/fbIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>
              <li>
                  <a href={igLink} title="Instagram" target="_blank" rel="noopener noreferrer">
                    <img className="instagram-iconImg" src={require("../images/igIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
                </li>
                <li>
                  <a href={mailLink} title="Email Us" target="_blank" rel="noopener noreferrer">
                    <img className="mail-iconImg" src={require("../images/mailIcon.png")} width="22px" height="22px" alt="error loading img"></img>
                  </a>
                </li>
                <li>
                  <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
                  <a onClick={this.handleOpenModal} style={{display:"flex", justifyContent: "center", alignItems:"center"}}  title ="Subscribe to our Newsletter!" target="_blank" rel="noopener noreferrer">Subscribe</a>
                    <Modal className="subscribe-modal" style={customStyle} tabIndex="-1" isOpen={this.state.showModal} 
                          onRequestClose={this.handleCloseModal} shouldCloseOnEsc={true} contentLabel="Subscribe to our Newsletter" id='myModal' >
                       <h1>Subscribe to our Newsletter</h1>
                       <p> Get the latest information on the Dynamics Performance Team!</p>
                       <MailchimpSubscribe
                        url={mailChimpLink}
                        render={({ subscribe, status, message }) => (
                        <CustomForm
                         status={status}
                         message={message}
                         onValidated={formData => subscribe(formData)}
                      />
                      )}
                      />
                      <br />
                    </Modal>
                </li>
              </ul>
            </div>
        );
      } 
}

export default SocialFollow;
