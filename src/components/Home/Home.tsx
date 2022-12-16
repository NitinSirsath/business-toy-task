import React, { Key } from 'react'
import PerkTickIcon from '../../assets/header-tick.png'
import HomeBackGround from '../../assets/header-background.png'
import { hiringData } from './hiringData'
import { HomeContainer, PerksContainer, HiringContainer, ContentWrapper,CompanyCard } from './Home.style'


const Home = () => {

    const perkData = [
        {
            id: 1,
            perkName: 'Flexible batch timing',
        },
        {
            id: 2,
            perkName: 'Daily Hands-on session',
        },
        {
            id: 3,
            perkName: 'Endless placement support',
        }
    ]

    return (
        <HomeContainer background={HomeBackGround}>
            <ContentWrapper>
                <h2>#nocoding</h2>
                <div>
                    <h1>An Industry approved career restarter program in <br /> Data Science.</h1>
                </div>
                <PerksContainer>
                    {perkData.map((perk) => {
                        return <h4 key={perk.id}><img src={PerkTickIcon} height={15} alt="tick-icon" />{perk.perkName}</h4>

                    })}
                </PerksContainer>
            </ContentWrapper>
            <HiringContainer>
                <h4>1000+ Companies Hiring:</h4>
                <CompanyCard>
                    {hiringData.map((company: any) => {
                        return <img key={company.id} src={company.companyLogo} height={26} alt="company-logo" />
                    })
                    }
                    
                </CompanyCard>
            </HiringContainer>
        </HomeContainer>
    )
}

export default Home