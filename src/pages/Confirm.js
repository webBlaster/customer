import { Box, Paragraph } from "grommet";
import { FormCheckmark } from "grommet-icons";
import styled from "styled-components";

const Container = styled(Box)`
  background: #333333;
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Confirm = () => {
  return (
    <Container align="center" pad="max">
      <Paragraph padding="5" textAlign="center" color="#ffffff">
        Your order has been sent and one of our drivers will call you
      </Paragraph>
      <FormCheckmark size="large" />
    </Container>
  );
};

export default Confirm;
