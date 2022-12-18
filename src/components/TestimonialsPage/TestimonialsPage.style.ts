import styled from "styled-components";

export const Container = styled.div`
 
`

export const CardContainer = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props:any) => props.background});
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;

        @media only screen and (max-width:428px){
            /* align-items: unset;
    justify-content: unset; */
    overflow-x: scroll;
        }
`

export const TitleHeading = styled.h1`
        color: #EC5315;
        font-weight: lighter;
        text-align: center;
        margin-bottom: 3.4rem;
`

export const Card = styled.div`
        background-color: #fff;
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
    border: 0.1rem solid rgba(112, 112, 112, 0.5);
    height: 25rem;
    width: 18rem;
    text-align: center;
    margin-bottom: 1rem;
    
        h2{
            margin: 20px 0px;
        }

        img{
            margin-top: 40px;
        }

        
`