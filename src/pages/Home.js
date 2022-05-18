import { Box, Button, Heading } from "grommet";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  background: #333333;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Container align="center" pad="medium">
        <Heading margin="5" textAlign="center" color="#ffffff">
          The fastest delivery
          <br /> service in Ikorodu, Lagos, Nigeria.
        </Heading>
        <Link to="/order">
          <Button primary label="Request Pickup" color="#00873D" />
        </Link>
      </Container>
    </>
  );
};

export default Home;
