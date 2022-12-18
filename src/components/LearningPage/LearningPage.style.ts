import styled from "styled-components";

export const Container = styled.div`
    padding: 100px;

    
    @media only screen and (max-width:868px){
            padding: 70px;
        }
        @media only screen and (max-width:768px){
            padding: 50px;
        }
        @media only screen and (max-width:428px){
            padding: 20px;
        }
`

export const Heading = styled.h1`
    color: #EC5315;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 40px;
`

export const LeftContainer = styled.div`

`

export const Card = styled.div`
    display: flex;
    align-items: center;

    p{
        font-weight: 600;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;

        @media only screen and (max-width:868px){
          gap  : 100px;
        }
        @media only screen and (max-width:768px){
            gap: 80px;
        }
        @media only screen and (max-width:428px){
            gap: 40px;
            flex-direction: column;
        }
`

export const RightContainer = styled.div`

    p{
        font-size: larger;
    }
`

export const KohlsContainer = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
`
export const Kohls = styled.div`
    text-align: center;
`


