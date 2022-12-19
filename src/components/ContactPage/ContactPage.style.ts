import styled from "styled-components";



export const Container = styled.div`
background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props:any) => props.background});
    color: white;
    padding: 15px 100px ;
    @media only screen and (max-width: 428px) {
        padding: 40px 40px ;
    }

    @media only screen and (max-width: 968px) {
        padding: 0px 60px ;
    }
    @media only screen and (max-width: 868px) {
        padding: 0px 50px ;
    }
    @media only screen and (max-width: 768px) {
        padding: 0px 40px ;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 27rem;
    
    p{
        display: flex;
        margin-bottom: 10px;
        gap: 10px;
        align-items: center;
        font-weight: 600;
    font-size: 17px;

        @media only screen and (max-width: 428px){
            gap: 4px;
        
        font-weight: 500;
    font-size: 16px;
        }
    }

    @media only screen and (max-width: 428px) {
        flex-direction: column;
        height: 50rem;
    }
`

export const Heading = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 20px;

    @media only screen and (max-width: 428px) {
        text-align: center;
        line-height:normal;
        font-size: 24px
    }
`

export const DetailsCardContainer = styled.div`
    background-color: #f7f7f7;
    transition: all .2s ease;
   
    padding: 1.1rem 2.8rem;
    height: 90%;
    width: 23rem;
    text-align: left;
    color: black;
    border-radius: 13px;
   



    @media only screen and (max-width: 968px) {
        padding: 2.1rem 2.4rem;
        width: 29rem;
    }
    @media only screen and (max-width: 868px) {
        padding: 1.9rem 2.2rem;
        width: 29rem;
    }
    @media only screen and (max-width: 768px) {
        padding: 1.7rem 2.2rem;
        width: 29rem;
    }
    
    
    @media only screen and (max-width: 428px) {
        width: 23rem;
        height: 55%;
    }


        h2{
            text-align: center;
            color: #EC5315;
            font-weight: 500;
            margin-bottom: 1rem;
        }

            p{
                font-weight: lighter;
            }

        input{
            width: 100%;
    height: 2.5rem;
    margin-top: 0.1rem;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    border: 0.1rem solid #EC5315;
    background-color: inherit;
    

    @media only screen and (max-width: 968px) {
        height: 2.2rem;
        margin-bottom: 0.8rem;
        }
        @media only screen and (max-width: 868px) {
            height: 1.8rem;
            margin-bottom: 0.7rem;
        }
        @media only screen and (max-width: 768px) {
            height: 1.6rem;
            margin-bottom: 0.5rem;
        }
        @media only screen and (max-width: 428px) {
            height: 2.6rem;
            margin-bottom: 0.5rem;
        }
        }

        span{
            font-size: 10px;
        }
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
    padding: 0.8rem 1rem;
    font-size: 18px;
    font-weight: 600;
    border-radius: 14px;
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);


        @media only screen and (max-width: 968px) {
            padding: 0.6rem 0.8rem;
    font-size: 16px;
        }
        @media only screen and (max-width: 868px) {
            padding: 0.5rem 0.7rem;
    font-size: 18px;
        }
        @media only screen and (max-width: 768px) {
            padding: 0.4rem 0.6rem;
    font-size: 16px;
        }
        @media only screen and (max-width: 428px) {
            padding: 0.8rem 1rem;
    font-size: 16px;
    margin-top: 24px;
        }
`