import { useEffect } from "react";
import { API_URL } from "../constants";

const Admin = () => {
  useEffect(() => {
    //connect to geolocation stream
    const events = new EventSource(`${API_URL}/get-current-location`);
    events.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };
  }, []);
  return (
    <>
      <p>admin</p>
    </>
  );
};

export default Admin;
