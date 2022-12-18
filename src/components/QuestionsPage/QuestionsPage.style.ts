import styled from "styled-components";


export const Container = styled.div`
    padding: 100px;

    @media only screen and (max-width:868px){
        padding: 43px;
    }
    @media only screen and (max-width:768px){
        padding: 23px;
    }
    @media only screen and (max-width:428px){
        padding: 13px;
    }
`
export const Heading = styled.h1`
    color: #EC5315;
    margin-bottom: 70px;
    text-align: center;
    font-weight: lighter;
    line-height: normal;
`

export const QuestionsContainer = styled.div`

`
export const Card = styled.div`
    
    cursor: pointer;
    margin: 0 auto;
    width: 60%;
    border: 0.1rem solid #EC5315;
    margin-top: 2rem;
    padding: 1.7rem 2rem;
    border-radius: 0.7rem;
    /* transition: all .2s ease; */
    @media only screen and (max-width:868px){
        width: 70%;
    }
    @media only screen and (max-width:768px){
        width: 80%;
    }
    @media only screen and (max-width:428px){
        width: 90%;
    }

    ul{
        padding: 25px;

        li{
            margin-bottom: 10px;
            font-weight: lighter;
        }
    }
   
`

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

        p{
            font-weight: lighter;
            font-size: larger;
        }

        h2{
         color: #EC5315;;
        }
`