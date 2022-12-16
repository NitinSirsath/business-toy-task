import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin: 0px 0px; */
    gap: 350px;
    padding: 15px;

    @media only screen and (max-width: 1268px) {
        gap: 330px;
    padding: 12px;
    }
    @media only screen and (max-width: 1168px) {
        gap: 300px;
    padding: 8px;
    }
    @media only screen and (max-width: 1068px) {
        gap: 250px;
    padding: 8px;
    }
    @media only screen and (max-width: 968px) {
        gap: 150px;
    padding: 6px;
    }
    @media only screen and (max-width: 868px) {
        gap: 0px;
    padding: 4px;
    }
    @media only screen and (max-width: 768px) {
        gap: 0px;
    padding: 2px;
    }
    @media only screen and (max-width: 428px) {
        gap: 0px;
    padding: 14px 0px;
    justify-content: flex-start;
    margin-left: 50px;
    }
    `

export const LeftHeaderSide = styled.div`
    
    img{
        height: 30px;

        @media only screen and (max-width: 968px) {
            height: 26px;
        }
        @media only screen and (max-width: 868px) {
            height: 24px;
            
        }
        @media only screen and (max-width: 428px) {
            height: 32px;
        }
    }
    `

export const RightHeaderSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
`    

export const ContactContainers = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-right: 10px;

    @media only screen and (max-width: 1268px) {
       font-size: 15px;
    }
    @media only screen and (max-width: 1168px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 1068px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 968px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 868px) {
        font-size: 10px;
    }
    @media only screen and (max-width: 768px) {
        display: none;
    }
   
    /* color: lightblack; */

`
export const LogoWhatsapp = styled.img`
    height: 32px;
    padding-right: 5px ;

    @media only screen and (max-width: 968px) {
            height: 28px;
        }
    @media only screen and (max-width: 868px) {
            height: 26px;
        }
    @media only screen and (max-width: 768px) {
            height: 24px;
        }
    `

export const LogoCall = styled.img`
padding-right: 5px ;
    height: 20px;

    @media only screen and (max-width: 968px) {
            height: 18px;
        }
    @media only screen and (max-width: 868px) {
            height: 16px;
        }
    @media only screen and (max-width: 868px) {
            height: 14px;
        }
`