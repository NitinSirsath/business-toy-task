import styled from "styled-components";

export const Container = styled.div`
margin-top: 150px;
margin-bottom: 100px;

@media only screen and (max-width:428px){
        margin-top: 200px;

    }


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

export const SolutionCardContainer = styled.div<{background:string}>`
    background-position: center;
    /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: contain;
  background-image:
    url(${(props:any) => props.background});
    color: white;
    text-align: center;
    padding: 30px 20px ;
    position: relative;
    height: 80vh;
    

        @media only screen and (max-width:868px){
            position: static;
            background-image: none;
            
        }
    

    h2{
        padding: 1rem 2rem;
    display: inline-block;
    font-size: 1.2rem;
    background-color: #EC5315;
    color: #fff;
    font-weight: normal;
    text-align: center;
        
    @media only screen and (max-width:868px){
           width: 90%;
           padding: 0.9rem 1.8rem;
        }
    @media only screen and (max-width:768px){
          font-size: 1rem;
          padding: 0.7rem 1.5rem;
          width: 90%;
        }
    @media only screen and (max-width:428px){
           width: 90%;
           font-size: 0.8rem;
           padding: 0.5rem 1rem;
        }
    }
    p{
        color: black;
        font-size: 14px;
        font-weight: bold;
        text-align: start;

        @media only screen and (max-width:868px){
            margin-left: 40px;
        }
        @media only screen and (max-width:768px){
            margin-left: 10px;
            font-size: 12px;
        }
        @media only screen and (max-width:428px){
            margin-left: 0px;
            font-size: 10px;
        }
    }
`

export const SolutionCard1 = styled.div`
position: absolute;
    left: 11%;
    top: 10%;

    @media only screen and (max-width:868px){
            position: static;
           
           margin-bottom:10px;
        }


`
export const SolutionCard2 = styled.div`
position: absolute;
right: 9%;
top: 10%;

@media only screen and (max-width:868px){
            position: static;
           
           margin-bottom: 10px;
        }

`
export const SolutionCard3 = styled.div`
position: absolute;
    left: 6%;
    top: 45%;

    @media only screen and (max-width:868px){
            position: static;
           
           margin-bottom:10px;
        }

`
export const SolutionCard4 = styled.div`
position: absolute;

top: 55%;
    right: 3%;
    
    
    @media only screen and (max-width:868px){
            position: static;
           
           margin-bottom:10px;
        }

`
export const SolutionCard5 = styled.div`
position: absolute;
top: 75%;
    left: 15%;
    @media only screen and (max-width:868px){
            position: static;
           
           margin-bottom:10px;
        }

`
export const SolutionCard6 = styled.div`
position: absolute;
top: 78%;
    right: 8%;
    
    @media only screen and (max-width:868px){
            position: static;
          
          margin-bottom:10px; 
        }

`