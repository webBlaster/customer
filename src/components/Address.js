import { TextInput } from "grommet";
import { Location } from "grommet-icons";

const Address = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      type="address"
      icon={<Location />}
      required
    />
  );
};

export default Address;
