import React from 'react'
import ContactBg from '../../assets/contact-bc.png'
import OrangeDot from '../../assets/orange-dot.png'
import { Container,ContentWrapper ,DetailsCardContainer,Heading,Button} from './ContactPage.style'


const ContactPage = () => {

    const contactPerkData = [
        {
            id: 1,
            pernNAme : ' No repetitive calls',
        },
        {
            id: 2,
            pernNAme : ' Genuine advice and no sales pitch',
        },
        {
            id: 3,
            pernNAme : 'Discuss your personalized learning path',
        },
        {
            id: 4,
            pernNAme : ' Get mentored from industry expert',
        },
    ]

    const inputFieldsData = [
        {
            id: 1,
            inputTitle : "What's your Name ?"
        },
        {
            id: 2,
            inputTitle : "Great, What's your Email ID ?"
        },
        {
            id: 3,
            inputTitle : "Last, Your Phone Number ?"
        },
    ]

  return (
    <Container background={ContactBg}>
        <ContentWrapper>
            <div>
                <Heading>Signup for our One-to-One Mentoring Session :</Heading>
                <div>
                    {contactPerkData.map((item:any) => {
                        return (
                            <div key={item.id}>
                                <p><img src={OrangeDot} alt="orange-dot" /> {item.pernNAme}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <DetailsCardContainer>
                <h2>Talk to us Today !</h2>
                <div>
                    {inputFieldsData.map((inputName) => {
                        return (
                            <div key={inputName.id}>
                                <p>{inputName.inputTitle}</p>
                                <input type="text" />
                            </div>
                        )
                    })}
                </div>
                <div>
                    {/* <span>Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge.</span> */}
                <Button>Sign me up for a FREE call</Button>
                </div>
            </DetailsCardContainer>
        </ContentWrapper>
    </Container>
  )
}

export default ContactPage