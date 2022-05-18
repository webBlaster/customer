import { Box, Button, Heading, Select, TextArea, TextInput } from "grommet";
import { Mail } from "grommet-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Address from "../components/Address";
import PhoneNumber from "../components/PhoneNumber";

const Container = styled(Box)`
  background: #333333;
`;

const OrderForm = styled.form`
  padding: 5px;
  width: 90%;
  background: white;

  input,
  select,
  textarea {
    background: whitesmoke;
    margin: 5px 0;
  }
`;

const Order = () => {
  return (
    <Container align="center" pad="small">
      <Box pad="medium" background="white" align="center">
        <Heading level="1" textAlign="left" color="#333333">
          Order Details
        </Heading>

        <OrderForm>
          <Heading level="3" color="#333333">
            Pickup Information
          </Heading>
          <TextInput placeholder="Sender Full Name" required />
          <TextInput
            placeholder="Sender Email"
            type="email"
            icon={<Mail />}
            required
          />
          <PhoneNumber placeholder="Sender Phone Number" />
          <Address placeholder="Pickup Address" />

          <Heading level="3" color="#333333">
            Dropoff Information
          </Heading>

          <TextInput placeholder="Receiver Full Name" required />
          <TextInput
            placeholder="Receiver Email"
            type="email"
            icon={<Mail />}
            required
          />
          <PhoneNumber placeholder="Receiver Phone Number" />
          <Address placeholder="Dropoff Address" />
          <Select
            placeholder="package size"
            options={["small", "medium", "large"]}
          />
          <TextArea placeholder="Package Description" />
          <Link to="/confirmation">
            <Button fill primary color="#00873D" label="Place Order" />
          </Link>
        </OrderForm>
      </Box>
    </Container>
  );
};

export default Order;
