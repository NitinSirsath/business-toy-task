import styled from "styled-components";

export const Container = styled.div`    
    color: white;
    `

export const Heading = styled.h1`
    color: #EC5315;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 40px;
    `

export const Certificate = styled.img`
    height: 20rem;
    `

export const Wrapper = styled.div`
    background-color: #3D6085;
    padding: 1.5rem 15rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    @media only screen and (max-width:428px){
        flex-direction: column;
        padding: 1.5rem 12rem;
    }
`

export const CardContainer = styled.div`

    @media only screen and (max-width:428px){
        width: 90vw;
    }
`


export const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;

        p{
            font-size: 20px;
            width: 80%;
            font-weight: lighter;

                @media only screen only(max-width:428px){
                    width:100%;
                }
        }
`