import React from "react";
import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";
import { IconContext } from "react-icons";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
  SiPhonepe,
} from "react-icons/si";
import { Type } from "./Type";
import {

  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import downloadIcon from "../../assets/icons/download-icon.svg";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
      
         <Title>Hello, I'm Harikarthi</Title>
        <Name ><Type /> </Name>
        
       
        <p className="content">I craft websites that are as unique as you and transform your ideas into seamless digital experiences</p>
        <div id="contactdiv">
          <a
            href="https://github.com/Harrysmart15"
            target="_blank"
            rel="noopener noreferrer"
          
          >
            <SiGithub size={30} />
          </a>
          <a
           href="https://www.linkedin.com/in/harry-smart-5a4964251/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <SiLinkedin size={30}  />
          </a>

          <a href="tel:+91-8778161679">
            <IoIosCall size={30} />
          </a>
          <a href="mailto:harikarthik508@gmail.com">
            <IoMdMail size={30}  />
          </a>
        </div>
        {/* <Resume className="resume">
            <ResumeLink
              download="Harikarthi.k"
              href="file:///C:/Users/harik/Downloads/White%20Navy%20Modern%20Company%20Resume%20(1).pdf"
              target={"_blank"}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume> */}
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
