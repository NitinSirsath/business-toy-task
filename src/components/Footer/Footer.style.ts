import styled from "styled-components";

export const Container = styled.div<{background:string}>`

background-position: center center;
    /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props:any) => props.background});
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
    padding: 60px;

    @media only screen and (max-width:968px){
        gap: 70px;
    padding: 60px;
        }
        @media only screen and (max-width:868px){
            gap: 50px;
    padding: 40px;
        }
        @media only screen and (max-width:768px){
            gap: 40px;
    padding: 20px;
        }
        @media only screen and (max-width:468px){
            gap: 30px;
    padding: 10px;
    flex-direction: column;
    
        }

`

export const Heading = styled.h1`
    font-weight: lighter;
    line-height: normal;
    font-size: 3.8rem;
    @media only screen and (max-width:968px){
            padding: 80px;
        }
        @media only screen and (max-width:868px){
            font-size: 3.4rem;
        }
        @media only screen and (max-width:768px){
            font-size: 3rem;
        }
        @media only screen and (max-width:468px){
            font-size: 2rem;
        }
`

export const SpanDiv = styled.span`
    font-weight: bold;
`   

export const Card =styled.div`
color: black;
background-color: #f7f7f7;
    transition: all .2s ease;
    overflow: hidden;
    padding: 2rem 3rem;
    height: 80%;
    width: 22rem;
    text-align: left;
    /* color: #EC5315; */
    border-radius: 0.7rem;
    text-align: center;


        h2{
            text-align: center;
            font-weight: lighter;
            margin-bottom: 20px;
        }
        
`

export const Desc = styled.p`
    font-weight: 600;
    line-height: normal;
`

export const Batch = styled.p`
    font-weight: lighter;
    line-height: normal;
    margin: 10px 0px;
`

export const Button = styled.button`
display: inline-block;
    border: none;
    margin-left: auto;
    text-decoration: none;
    background-color: #EC5315;
    color: #fff;
    font-family: "GothamMedium", Arial, "Helvetica Neue", Helvetica, sans-serif;
    width: 100%;
    text-align: center;
    padding: 1rem 0.7rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%);

`