import styled from "styled-components";

export const HomeContainer = styled.div`
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props:any) => props.background});
    color: white;
    text-align: center;
    padding: 0px 100px ;
    height: 88vh;
    position: relative;
        h1{
            margin: 25px 0px;
            font-size: 4rem;
            line-height: normal;
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
        /* margin-top: 150px; */
        h4{
            font-weight: lighter
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
    width: 75%;
    box-shadow: 0 1.5rem 2rem rgb(0 0 0 / 60%);
    overflow: hidden;
    color: black;

    h4{
        margin-bottom: 56px;
        font-weight: 800;
        text-decoration: underline;
        text-decoration-thickness:2px
    }
        
`

export const CompanyCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 33px;

`