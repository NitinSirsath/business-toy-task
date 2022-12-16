import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin: 0px 0px; */
    gap: 350px;
    padding: 15px;

    
    `

export const LeftHeaderSide = styled.div`
    
    img{
        height: 30px;
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
    /* color: lightblack; */

`
export const LogoWhatsapp = styled.img`
    height: 32px;
    padding-right: 5px ;
    `

export const LogoCall = styled.img`
padding-right: 5px ;
    height: 20px;
`