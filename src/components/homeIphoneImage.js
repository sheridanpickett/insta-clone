import { useState, useEffect } from 'react';
import styled from 'styled-components';
import IphoneImage from '../images/home-phones.png';
import Screenshot1 from '../images/screenshot1.png';
import Screenshot2 from '../images/screenshot2.png';
import Screenshot3 from '../images/screenshot3.png';
import Screenshot4 from '../images/screenshot4.png';

const Container = styled.div`
    width: 380px;
    height: 581px;
    margin-right: 32px;
    position: relative;
    background-image: url(${IphoneImage});
    background-position: -46px 0;
    background-size: 468.32px 634.15px;
`

const Image = styled.img`
    opacity: ${props=>props.visible ? 1 : 0};
    transition: opacity 1.5s ease-in;
    z-index: 2;
    width: 250px;
    height: 538px;
    position: absolute;
    top: 27px;
    right: 17px;
`


export default function HomeIphoneImage() {

    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        const max = 4;
        const nextSlide = counter => {
            if(counter===max) {
                setCounter(1);
            } else {
                setCounter(counter+1);
            }
        }
        const interval = setInterval(()=>nextSlide(counter), 5000);
        return () => clearInterval(interval);
    },[counter])

    return (
        <Container>
            <Image src={Screenshot1} visible={counter===1} />
            <Image src={Screenshot2} visible={counter===2} />
            <Image src={Screenshot3} visible={counter===3} />
            <Image src={Screenshot4} visible={counter===4} />
        </Container>
    )
}