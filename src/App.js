import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API_URL } from "./constants";
import { Grommet } from "grommet";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Confirm from "./pages/Confirm";
import Admin from "./pages/Admin";

// const theme = {
//   global: {
//     font: {
//       family: "Roboto",
//       size: "18px",
//       height: "20px",
//     },
//   },
// };

function App() {
  const [validIp, setValidIp] = useState(false);
  //let [geocode, setGeocode] = useState({ lat: undefined, long: undefined });

  const validateIp = async () => {
    const response = await fetch(`${API_URL}/validate-ip`).catch((error) =>
      alert(error)
    );

    if (response.status === 200) {
      setValidIp(true);
    }
  };

  useEffect(
    () => {
      //check if ip address is valid
      validateIp();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <Grommet plain>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/confirmation" element={<Confirm />} />
          <Route path="/west.admin" element={validIp ? <Admin /> : <Home />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
