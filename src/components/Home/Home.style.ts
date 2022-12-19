import styled from "styled-components";

export const HomeContainer = styled.div<{background:string}>`
    background-position: center center;
    /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props:any) => props.background});
    color: white;
    text-align: center;
    padding: 0px 100px ;
    height: 88vh;
    position: relative;


    @media only screen and (max-width: 868px) {
            padding: 0px 50px;
            height: 70vh;
    }
    @media only screen and (max-width: 768px) {
            padding: 0px 30px;
            height: 70vh;
    }
    @media only screen and (max-width: 428px) {
            padding: 0;
            height: 70vh;
    }
        h1{
            margin: 25px 0px;
            font-size: 4rem;
            line-height: normal;

            @media only screen and (max-width: 868px) {
                font-size: 3rem;
                
            }
            @media only screen and (max-width: 768px) {
                font-size: 2rem;
            }

            @media only screen and (max-width: 428px) {
                margin: 5px 0px;
                
            font-size: 2rem;
            /* height: 70vh; */
    }
        }

        h2{
            font-size: 2rem;
        }
`
export const ContentWrapper = styled.div`
    position: absolute;
    margin: 0 auto;
    top: 65%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`

export const PerksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 1.5em;

    
    @media only screen and (max-width: 428px) {
        flex-direction: column;
        margin-top: 14px;
            gap: 0;
            
          
    }
        /* margin-top: 150px; */
        h4{
            font-weight: lighter;

            @media only screen and (max-width: 868px) {
                font-size: small;
                
            }
            @media only screen and (max-width: 428px) {
                font-size: medium;
                font-weight: 520;
                
            }
        }

    img{
        padding-right: 10px;
    }
`

export const HiringContainer = styled.div`
      
      transform: translateY(44rem);
    background-color: #fff;
    padding: 2rem;
    height: 9rem;
    margin: auto;
    width: 87%;
    box-shadow: 0 1.5rem 2rem rgb(0 0 0 / 60%);
    overflow: hidden;
    color: black;

    @media only screen and (max-width: 868px) {
        transform: translateY(36rem);
                
            }

            @media only screen and (max-width: 768px) {
                transform: translateY(36rem);
            }
            @media only screen and (max-width: 428px) {
                transform: translateY(35rem);
                width: 90%;
                height: 237px;
            }

    h4{
        margin-bottom: 48px;
        font-weight: 800;
        text-decoration: underline;
        text-decoration-thickness:2px
    }
        
`

export const CompanyCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;


    @media only screen and (max-width: 868px) {
       
    gap: 6px;
    }
    @media only screen and (max-width: 768px) {
      
    gap: 3px;
    }
    @media only screen and (max-width: 428px) {
        display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    }

        img{
            height: 26px;

            @media only screen and (max-width: 428px) {
                height: 22px;
            }
            @media only screen and (max-width: 868px) {
                height: 20px;
                
            }
            @media only screen and (max-width: 768px) {
                height: 18px;
            }
        }
`