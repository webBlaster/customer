import { Box, Button, Heading, Select, TextArea, TextInput } from "grommet";
import { useNavigate } from "react-router-dom";
import { Mail } from "grommet-icons";
import styled from "styled-components";
import Address from "../components/Address";
import PhoneNumber from "../components/PhoneNumber";

import orderService from "../services/order";

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
  let navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    let result = await orderService(formProps);
    if (result) {
      event.target.reset();
      let id = result.data;
      navigate(`/confirmation/${id}`);
    }
  };
  return (
    <Container align="center" pad="small">
      <Box pad="medium" background="white" align="center">
        <Heading level="1" textAlign="left" color="#333333">
          Order Details
        </Heading>

        <OrderForm onSubmit={handleFormSubmit}>
          <Heading level="3" color="#333333">
            Pickup Information
          </Heading>
          <TextInput
            placeholder="Sender Full Name"
            name="senderName"
            required
          />
          <TextInput
            placeholder="Sender Email"
            type="email"
            icon={<Mail />}
            name="senderEmail"
            required
          />
          <PhoneNumber
            name="senderPhoneNumber"
            placeholder="Sender Phone Number"
          />
          <Address name="pickupAddress" placeholder="Pickup Address" />

          <Heading level="3" color="#333333">
            Dropoff Information
          </Heading>

          <TextInput
            name="receiverName"
            placeholder="Receiver Full Name"
            required
          />
          <TextInput
            name="receiverEmail"
            placeholder="Receiver Email"
            type="email"
            icon={<Mail />}
            required
          />
          <PhoneNumber
            name="receiverPhoneNumber"
            placeholder="Receiver Phone Number"
          />
          <Address name="dropoffAddress" placeholder="Dropoff Address" />
          <Select
            name="size"
            placeholder="package size"
            options={["small", "medium", "large"]}
          />
          <TextArea
            name="description"
            placeholder="Package Description"
            required
          />

          <Button primary type="submit" color="#00873D" label="Place Order" />
        </OrderForm>
      </Box>
    </Container>
  );
};

export default Order;
