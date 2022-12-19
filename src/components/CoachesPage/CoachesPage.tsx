import React from 'react'
import {data} from './coachesData'
import LinkedInIcon from '../../assets/LinkedIn.png'
import {Container,Heading ,CardContainer,Card,Button,ImagePerson,LinkedInImage} from './CoachesPage.style'

const CoachesPage = () => {
  return (
    <Container>

        <Heading>Learn from our <span style={{fontWeight: 'bold'}}>Top Coaches</span></Heading>
        <CardContainer>
            {data.map((person) => {
                return <Card key={person.id}>
                    <LinkedInImage src={LinkedInIcon} alt="linkedIn" />
                    <ImagePerson src={person.image} alt={person.peronName} />
                    <h2>{person.peronName}</h2>
                    <p>{person.position}</p>
                    <a href={person.link} target="_blank"><Button>VIEW PROFILE</Button></a>
                </Card>
            })}
        </CardContainer>
        <span></span>
    </Container>
  )
}

export default CoachesPage