import { TextInput } from "grommet";
import { Location } from "grommet-icons";

const Address = ({ name, placeholder }) => {
  return (
    <TextInput
      name={name}
      placeholder={placeholder}
      type="address"
      icon={<Location />}
      required
    />
  );
};

export default Address;
