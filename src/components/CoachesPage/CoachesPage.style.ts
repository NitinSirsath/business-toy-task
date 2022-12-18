import styled from "styled-components";

export const Container = styled.div`
    padding: 100px;

        @media only screen and (max-width:968px){
            padding: 80px;
        }
        @media only screen and (max-width:868px){
            padding: 60px;
        }
        @media only screen and (max-width:768px){
            padding: 40px;
        }
        @media only screen and (max-width:468px){
            padding: 20px;
        }
`

export const Heading = styled.h1`
    color: #EC5315;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 40px;
    `

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media only screen and (max-width:868px){
            gap: 30px;
        }
        @media only screen and (max-width:768px){
            gap: 20px;
        }
        @media only screen and (max-width:468px){
            gap: 16px;
        }

`

export const Card = styled.div`
    height: 25rem;
    width: 32rem;
    text-align: center;
    position: relative;


    @media only screen and (max-width:968px){
            
        }
        @media only screen and (max-width:868px){

        }
        @media only screen and (max-width:768px){

        }
        @media only screen and (max-width:468px){

        }

    p{
        text-align: center;
        padding: 10px 40px;
    }

`
export const LinkedInImage = styled.img`
        position: absolute;
    top: 23%;
    right: 18%;
    height: 3rem;
`

export const ImagePerson = styled.img`
     height: 12rem;
    margin-top: 2rem;
`


export const Button = styled.button`
display: inline-block;
    margin-top: 1.2rem;
    text-decoration: none;
    background-color: #EC5315;
    color: #fff;
    width: 80%;
    text-align: center;
    padding: 0.9rem 0;
    font-size: 1rem;
    border-radius: 0.6rem;
    border: none;
    font-weight: 600;
`