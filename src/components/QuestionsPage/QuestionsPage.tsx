import React, { useState } from "react";
import { Container, Heading,QuestionsContainer ,Card,Question} from "./QuestionsPage.style";

const QuestionsPage = () => {
  const [firstQ, setFirstQ] = useState(false);
  const [secondQ, setSecondQ] = useState(false);
  const [thirdQ, setThirdQ] = useState(false);
  return (
    <Container>
      <Heading>
        Frequently <span style={{ fontWeight: "bold" }}>Asked Questions</span>
      </Heading>

      <QuestionsContainer>
        <Card>
        <Question onClick={() => setFirstQ(preV => !preV)}>
          <p>What can I expect from Mentoring Session?</p>
          {firstQ ? <h2>-</h2>: <h2>+</h2>}
        </Question>
        <div>{firstQ ? <ul>
            <li>The main intend of mentoring session is to provide you an un-biased opinion which can help you decide if Data Science is a career choice for you.</li>
            <li>You can discuss about you concerns regarding your career background, industry experience, plan for transition to data science, learning path, industry projects, etc.</li>
            <li>You can expect our mentor to help you provide a clear picture of current job trends in Data Science, recommend target job profiles, and challenges that you may face while learning.</li>
        </ul> : ''}</div>
        </Card>
        <Card>
        <Question onClick={() => setSecondQ(preV => !preV)}>
          <p>For how long can I speak to the mentor?</p>
          {secondQ ? <h2>-</h2>: <h2>+</h2>}
        </Question>
        <div>{secondQ ? <ul>
            <li>You can connect with you mentor for average duration of 30 to 45 minutes which is again flexible based of the quality of discussion and questions you ask.</li>
            <li>We recommend you to introspect about your career background and make a list of questions you wish to ask your mentor.</li>
        </ul>: ''}</div>
        </Card>
        <Card>
        <Question onClick={() => setThirdQ(preV => !preV)}>
          <p>Can I book appointment based on my availability?</p>
          {thirdQ ? <h2>-</h2>: <h2>+</h2>}
        </Question>
        <div>{thirdQ? <ul>
            <li>Yes, you can request a call based on your available schedule. Once you register for the mentoring session, you will be immediately receiving a mail confirming your registration. We request you to reply for the same mail with your availability</li>
        </ul>: ''}</div>
        </Card>
      </QuestionsContainer>
    </Container>
  );
};

export default QuestionsPage;
