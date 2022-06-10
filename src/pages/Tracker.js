import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants";
import styled from "styled-components";
import trackerService from "../services/tracker";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  p {
    font-size: 20px;
  }
`;
const MapContainer = styled.div`
  iframe {
    width: 99%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    height: 99vh;
  }
`;

const Tracker = () => {
  let { id } = useParams();
  let [orderStatus, setOrderStatus] = useState(null);
  let [origin, setOrigin] = useState(null);
  let [geocode, setGeocode] = useState(null);

  const getTrackingInfo = async () => {
    //fetch order data with id(address, status,)

    const result = await trackerService(id);

    if (result) {
      //console.log(result);
      //set origin and order status and shit
      setOrigin(result?.data?.dropoff_address);
      setOrderStatus(result?.data?.status);
      //console.log(origin?.replaceAll(" ", "+"));
    }

    //if status is in_progress subscribe to driver location
  };

  useEffect(
    () => {
      //fetch order data with id(address, status,)
      getTrackingInfo();

      //connect to geolocation stream
      const events = new EventSource(`${API_URL}/get-current-location`);
      events.onmessage = (event) => {
        const data = event.data;
        console.log(JSON.parse(data));
        setGeocode(JSON.parse(JSON.parse(data)));
      };
    },
    // eslint-disable-next-line
    []
  );
  return orderStatus !== "in_progress" ? (
    <Container>
      <p>Order is {orderStatus}</p>
    </Container>
  ) : (
    <MapContainer>
      <iframe
        title="map"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDxt_0pndC4mR72g4IGedAn9uSAHiJjemI&origin=${
          geocode?.lat
        }+${geocode?.lon}&destination=${origin?.replaceAll(" ", "+")}`}
      ></iframe>
    </MapContainer>
  );
};

export default Tracker;
