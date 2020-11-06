import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from "styled-components";

const TitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  h1{
      font-size: 50px;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;






export const TitleComponent = () => {
    return (
        <div>
            <TitleMessage>
            <div className="titleMessage">
                    <div className="heading">
                    <div className="main text-center mb-3">
                     <h1>Hi, I am</h1>
                    
                    <span>
                        <strong>Lucas Gonzalez</strong>
                    </span>
                </div>
                <div className="sub">
                    <Typewriter
                        options={{
                        strings: ["Web Developer", "Designer", "Learner"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                        }}
                    />
                </div>
                </div>
            </div>
            
            </TitleMessage>
            
        </div>
    )
}

export default TitleComponent