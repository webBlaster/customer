import { API_URL } from "../constants";

const orderService = async (data) => {
  const response = await fetch(`${API_URL}/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.log(error);
    alert(error);
    return;
  });

  if (response) {
    const result = await response;
    return result;
  }
};

export default orderService;
