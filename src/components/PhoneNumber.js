import { TextInput } from "grommet";
import { Phone } from "grommet-icons";

const PhoneNumber = ({ name, placeholder }) => {
  return (
    <TextInput
      name={name}
      placeholder={placeholder}
      type="tel"
      icon={<Phone />}
      required
    />
  );
};

export default PhoneNumber;
