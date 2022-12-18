import React from 'react'
import bgImage from '../../assets/contact-bc.png'

import { Container, Heading, Card, Desc, SpanDiv,Batch,Button } from './Footer.style'

const Footer = () => {
    return (
        <Container background={bgImage}>
            <Heading>Our next <SpanDiv>Success</SpanDiv> <br />
                Story can be <SpanDiv>yours</SpanDiv>!</Heading>
            <Card>
                <h2>Yazhini T</h2>
                <Desc><i>" My experience with the Business Toys team was very pleasing while attending Data Science Online Certification Training. This course has benefitted me in a number of ways."</i></Desc>
                <Batch>Batch of 2018 <br />
                    <i>Data Science Course</i></Batch>
                <Button>Sign me up for a FREE call</Button>
            </Card>
        </Container>
    )
}

export default Footer