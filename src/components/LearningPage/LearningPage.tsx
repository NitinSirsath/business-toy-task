import React from 'react'
import orangedot from '../../assets/learningdot.png'
import kohls from '../../assets/kohls.png'
import { Container, Heading, LeftContainer, Card, ContentWrapper, RightContainer ,KohlsContainer,Kohls} from './LearningPage.style'

const LearningPage = () => {

    const data = [
        {
            id: 1,
            title: 'Preparatory Course',
        },
        {
            id: 2,
            title: 'SQL and MongoDB for Data Science',
        },
        {
            id: 3,
            title: 'Python for Data Science',
        },
        {
            id: 4,
            title: 'Applied Statistics',
        },
        {
            id: 5,
            title: 'Supervised Machine Learning',
        },
        {
            id: 6,
            title: 'Unsupervised Machine Learning',
        },
        {
            id: 7,
            title: 'Deep Learning & AI',
        },
        {
            id: 8,
            title: 'Deployment & POC',
        },
    ]
    return (
        <Container>
            <Heading>Learning <span style={{ fontWeight: 'bold' }}>Path</span></Heading>
            <ContentWrapper>
                <LeftContainer >
                    {
                        data.map((item) => {
                            return <Card key={item.id}>
                                <img src={orangedot} alt='dot' />
                                <p >{item.title}</p>
                            </Card>
                        })
                    }
                </LeftContainer>
                <RightContainer>
                    <p><i>"Business Toys has been instrumental in <br />
                        helping us providing right talent with key <br />
                        skills in Data Science and AI. "</i></p>
                    <KohlsContainer>
                        <h2 style={{color: 'maroon',fontWeight:'bold'}}><i>KHOL'S</i></h2>
                        <Kohls>
                            <img src={kohls} alt="khols" />
                            <p>Lew Flauntha</p>
                            <p>Sr. Data Scientist</p>
                        </Kohls>
                    </KohlsContainer>
                </RightContainer>
            </ContentWrapper>
        </Container>
    )
}

export default LearningPage