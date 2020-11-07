import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./about.style.css";
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'
import Button from 'react-bootstrap/Button'


const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3" >About me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 "> 
                            <Image className="profile justify-content-end" alt="profile" src={Profile} rounded fluid/>
                        </Row>
                    </Col>


                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            <h3>Hi i'm  <strong>Lucas Gonzalez</strong></h3>
                            <p>A passionate programmer. I am a Full Stack Web Developer with JavaScript, Angular, React.js, Node.js as my tech stack.
                            My goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque culpa animi impedit doloremque eveniet numquam quae, quam commodi, veritatis distinctio asperiores minima laborum possimus provident deserunt dolores non similique nemo ratione voluptatum aperiam delectus ab accusantium. Nemo, reprehenderit ex!</p>
                        </Row>
                        <Row>
                            {/*buttons */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                    </a>
                                </div>

                                <div>
                                    <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/luc4s92" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">
                                        GitHub
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/lucas-gonzalez-678631124//" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        LinkedIn
                                    </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            </div>
        </div>
    );
};

export default About;
