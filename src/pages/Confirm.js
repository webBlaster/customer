import { Box, Paragraph } from "grommet";
import { FormCheckmark } from "grommet-icons";
import styled from "styled-components";

import { useParams } from "react-router-dom";

const Container = styled(Box)`
  background: #333333;
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Confirm = () => {
  let { id } = useParams();
  return (
    <Container align="center" pad="max">
      <Paragraph padding="5" textAlign="center" color="#ffffff">
        Your order has been sent and one of our drivers will call you
      </Paragraph>
      <FormCheckmark size="large" />
      <Paragraph padding="5" textAlign="center" color="#ffffff">
        follow this link to track order <br />
        <a
          href={`${window.location.origin}/track.order/${id}`}
        >{`${window.location.origin}/track.order/${id}`}</a>
      </Paragraph>
    </Container>
  );
};

export default Confirm;
