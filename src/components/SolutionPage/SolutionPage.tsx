import React from 'react'
import SolutionImage from '../../assets/solution.png'
import { Container, ColorRed, TitleHeading ,SolutionCardContainer} from './SolutionPage.style'

const SolutionPage = () => {
  return (
    <Container>
      <TitleHeading>Discover <ColorRed>our</ColorRed> unique solution <br />
        offering <ColorRed>your</ColorRed> smooth career <ColorRed>RESTART</ColorRed>.</TitleHeading>
        <SolutionCardContainer background={SolutionImage}>

        </SolutionCardContainer>
    </Container>
  )
}

export default SolutionPage