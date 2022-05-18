import { TextInput } from "grommet";
import { Phone } from "grommet-icons";

const PhoneNumber = ({ placeholder }) => {
  return (
    <TextInput placeholder={placeholder} type="tel" icon={<Phone />} required />
  );
};

export default PhoneNumber;
