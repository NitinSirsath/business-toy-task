import React from 'react'
import testimonialbg from '../../assets/testimonials/testimonial-bg.png'
import { data } from './testimonialdata'
import { Container, TitleHeading, CardContainer, Card } from './TestimonialsPage.style'

const TestimonialsPage = () => {
    return (
        <Container >
            <TitleHeading>What our <span style={{ fontWeight: 'bold' }}>students say</span> :</TitleHeading>
            <CardContainer background={testimonialbg}>
                {
                    data.map((card) => {
                        return <Card key={card.id}>
                            <img src={card.image} alt={card.personName} />
                            <h2>{card.personName}</h2>
                            <p style={{
                                fontSize: '14px',
                                lineHeight: 'normal', 
                            }}><i>{card.desc}</i></p>
                            <p style={{fontWeight:'bold'}}>{card.batch}</p>
                            <p style={{fontWeight:'lighter'}}>{card.course}</p>
                        </Card>
                    })
                }
            </CardContainer>
        </Container>
    )
}

export default TestimonialsPage