import React from 'react'
import SolutionImage from '../../assets/solution.png'
import { Container, ColorRed, TitleHeading ,SolutionCardContainer,SolutionCard1,SolutionCard2,SolutionCard3,SolutionCard4,SolutionCard5,SolutionCard6} from './SolutionPage.style'

const SolutionPage = () => {
  return (
    <Container>
      <TitleHeading>Discover <ColorRed>our</ColorRed> unique solution <br />
        offering <ColorRed>your</ColorRed> smooth career <ColorRed>RESTART</ColorRed>.</TitleHeading>
        <SolutionCardContainer background={SolutionImage}>
        <SolutionCard1>
          <h2>How will I ensure I will get a job?</h2>
          <p>- 10 Guaranteed Interview Calls</p>
          <p>-ENDLESS Placement Support, powered by HIRIST</p>
        </SolutionCard1>
        <SolutionCard2>
          <h2>I have lost touch from Industry.</h2>
          <p>-  Tailor-made Data Science career Restarter Program</p>
          <p>-We hand hold you from LEVEL ZERO</p>
        </SolutionCard2>
        <SolutionCard3>
          <h2>I feel my resume needs a revamp</h2>
          <p>-  20 Live projects, 10 corporate case studies & POCs</p>
          <p>- Guaranteed 85% Resume Index</p>
        </SolutionCard3>
        <SolutionCard4>
          <h2>Will Industry Accept me after a break?</h2>
          <p>- Our curriculum upskill you to bridge the industry gap</p>
          <p>- LIVE Industry Projects</p>
        </SolutionCard4>
        <SolutionCard5>
          <h2>My confidence level is low</h2>
          <p>-  Daily practical hands on sessions</p>
          <p>- 24X7 Doubt clearing & Mentor support</p>
        </SolutionCard5>
        <SolutionCard6>
          <h2>Will I be able to balance my personal & <br /> learning commitments?</h2>
          <p>-  Flexible batch timings</p>
          <p>- Excess to recoded class videos & other learning resources</p>
        </SolutionCard6>
        </SolutionCardContainer>
    </Container>
  )
}

export default SolutionPage