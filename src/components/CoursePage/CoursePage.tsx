import React from "react";
import { data } from "./coursePerkData";
import {
  Container,
  TitleHeading,
  PerkContainer,
  PerkCard,
  BroucherButtonContainer,
  BroucherButton,
  AssistantContainer,
  MentorshipContainer,
} from "./CoursePage.style";

const CoursePage = () => {
  return (
    <Container>
      <TitleHeading>
        With Business Toys
        <span style={{ fontWeight: "bold" }}> Data Science courses</span> you
        get :
      </TitleHeading>
      <PerkContainer>
        {data.map((item: { id: React.Key | null | undefined; image: string | undefined; perkName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; }) => {
          return (
            <PerkCard key={item.id}>
              <img src={item.image} height={58} alt={item.perkName} />
              <h3>{item.perkName}</h3>
            </PerkCard>
          );
        })}
      </PerkContainer>

        <BroucherButtonContainer>
            <BroucherButton>DOWNLOAD FULL BROUCHER</BroucherButton>
        </BroucherButtonContainer>
       <AssistantContainer>
       <h1>Get your dream job <br />with 
<span style={{color:'#ec5315'}}> 100% Placement Assistance*.</span></h1>
        <MentorshipContainer>
            <input type="text" placeholder="Enter your Name"/>
            <input type="text" placeholder="Enter your Mobile Number" />
            <button>Get Mentored</button>
        </MentorshipContainer>
        <p>*We help you to take decision in less than 10 minutes.</p>
       </AssistantContainer>
    </Container>
  );
};

export default CoursePage;