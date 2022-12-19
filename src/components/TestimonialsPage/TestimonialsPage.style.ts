import styled from "styled-components";

export const Container = styled.div`
 
`

export const CardContainer = styled.div<{background:string}>`
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
    height: 27rem;
    width: 18rem;
    text-align: center;
    margin-bottom: 1rem;
    
    @media only screen and (max-width:968px){
            height: 30rem;
        }
        @media only screen and (max-width:868px){
            
            height: 30rem;
        }
        @media only screen and (max-width:768px){

        }
        @media only screen and (max-width:468px){
            
            padding: 0px 34px;
        }
    
        h2{
            margin: 20px 0px;
            @media only screen and (max-width:968px){
                font-size: medium;
            }
            @media only screen and (max-width:868px){
            margin: 15px 0px;
            font-size: small;
            
        }
        @media only screen and (max-width:768px){
            margin: 12px 0px;
            font-size: small;
            
        }
        @media only screen and (max-width:468px){
            font-size: medium;
           

        }
        }

        img{
            margin-top: 40px;
        }

        p{
            padding: 5px 30px;
            @media only screen and (max-width:968px){
                font-size: 16px;
                
            }
            @media only screen and (max-width:868px){
            font-size: 14px;
            padding: 8px 3px;
            
        }
        @media only screen and (max-width:768px){
            font-size: 12px;

        }
        @media only screen and (max-width:468px){

        }
        }

        
`