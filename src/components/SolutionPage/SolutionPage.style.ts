import styled from "styled-components";

export const Container = styled.div`
margin-top: 200px;

`
export const TitleHeading = styled.h1`
    text-align: center;
    line-height: normal;
    font-size: 2.7rem;
    margin-bottom: 50px;

    @media only screen and (max-width: 868px) {
        font-size: 2.2rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 428px) {
        font-size: 1.5rem;
    }
`

export const ColorRed = styled.span`
    color: #EC5315;
`

export const SolutionCardContainer = styled.div`
    background-position: center center;
    /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image:
    url(${(props:any) => props.background});
    color: white;
    text-align: center;
    padding: 30px 20px ;
    
`