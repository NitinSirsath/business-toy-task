import styled from "styled-components";


export const Container = styled.div`
  padding: 100px;

  @media only screen and (max-width: 968px) {
    padding: 80px;
  }
  @media only screen and (max-width: 868px) {
    padding: 60px;
  }
  @media only screen and (max-width: 768px) {
    padding: 40px;
  }
  @media only screen and (max-width: 428px) {
    padding: 35px 0px;
  }
`;

export const TitleHeading = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  color: #ec5315;
  text-align: center;
  margin-bottom: 100px;
  padding: 0px 10px;

  @media only screen and (max-width: 968px) {
    font-size: 1.8rem;
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 868px) {
    font-size: 1.6rem;
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 428px) {
    font-size: 1.4rem;
    margin-bottom: 30px;
  }
`;

export const PerkContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 30px 100px;

  @media only screen and (max-width: 428px) {
    grid-template-columns: repeat(2, 0.7fr);
    gap: 23px;
    padding: 0px 10px;
  }
`;

export const PerkCard = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 428px) {
    width: 100%;
  }

  h3 {
    text-align: center;
    margin-top: 13px;
    line-height: normal;

    @media only screen and (max-width: 968px) {
      margin-top: 12px;
      font-size: 15px;
    }
    @media only screen and (max-width: 868px) {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 14px;
    }
    @media only screen and (max-width: 428px) {
      font-size: 0.8rem;
      margin-bottom: 17px;
    }
  }
`

export const BroucherButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export const BroucherButton = styled.button`
    background-color: #ec5315;
    color: white;
    width: 27rem;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.4rem;
    border-radius: 0.7rem;
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
    border: none;
    font-weight: 600;
`

export const AssistantContainer = styled.div`
    margin-top: 100px;

        h1{
            line-height: normal;
            text-align: center;
            font-size: 3rem;
            font-weight: 500;

                @media only screen and (max-width:868px){
                    font-size: 2.6rem;
                }
                @media only screen and (max-width:868px){
                    font-size: 2.2rem;
                }
        }

        p{
            text-align: center;
            font-size: 12px;
            font-weight: 600;

            @media only screen and (max-width:428px){
                margin-top: 14px;
            }
        }
`

export const MentorshipContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 50px;

        @media only screen and (max-width:428px){
            flex-direction: column;
        }


        input{
            padding: 1rem;
    width: 19rem;
    font-size: 1rem;
    border-radius: 0.6rem;
    border: 0.1rem solid #707070;
    outline: none;
        }

        button{
            display: inline-block;
    border: none;
    text-decoration: none;
    background-color: #EC5315;
    color: #fff;
    
    width: 15rem;
    text-align: center;
    padding: 0.6rem 0;
    font-size: 1.3rem;
    border-radius: 0.6rem;
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
        }
`

