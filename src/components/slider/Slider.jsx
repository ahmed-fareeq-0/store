// import style slider 
import { Container, Arrow, Wrapper, ImgContainer, Slide, Image, InfoContainer, Title, Desc, Button } from "./styleSlider";

// import data 
import { sliderItems } from "../../date";

// import icons 
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

// import use state 
import { useState } from "react";

// import Link 
import {Link } from 'react-router-dom'


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
  

    // slider click arrow
    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
      };


  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
          <ArrowLeftOutlined/>
      </Arrow>
        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map(item => (
                <Slide bg={item.bg} >
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to="/products"><Button>SHOW NOW</Button></Link>
                    </InfoContainer>
                </Slide>
            ))}

        </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
          <ArrowRightOutlined/>
      </Arrow>
    </Container>
  );
}

export default Slider;
