const orderService = async (data) => {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));

  if (response) {
    const result = response.json();
    return result;
  }
};

export default orderService;
