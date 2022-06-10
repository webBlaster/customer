import { API_URL } from "../constants";

const trackerService = async (id) => {
  const response = await fetch(`${API_URL}/track-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  }).catch((error) => {
    console.log(error);
    return;
  });

  let result = await response;
  if (result) {
    return result.json();
  }
};

export default trackerService;
