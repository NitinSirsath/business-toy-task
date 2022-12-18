import React from 'react'
import certificateImage from '../../assets/certificate.jpg'
import tickmarkIcon from '../../assets/tickmark.png'
import {Container,Certificate ,Heading,Wrapper,Card,CardContainer} from './CertificatePage.style'

const CertificatePage = () => {

    const certificateData = [
        {
            id: 1,
            title : 'Internationally recognized certification',
        },
       
        {
            id: 2,
            title : 'Unique certification identification number for authentication',
        },
       
        {
            id: 3,
            title : 'Real time validation check through website',
        },
       
        {
            id: 4,
            title : 'Accepted by top multinationals',
        },
       
    ]

  return (
    <Container>
        <Heading >Get <span style={{fontWeight: 'bold'}}>Certified</span></Heading>
        <Wrapper>
            <Certificate src={certificateImage} alt="certificate-image" />
            <CardContainer>
            {
                certificateData.map((item) => {
                    return <Card key={item.id}>
                        <img src={tickmarkIcon} height={26} alt="" />
                         <p key={item.id}>{item.title}</p>
                    </Card>
                }) 
            }
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default CertificatePage