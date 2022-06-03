import { Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Grommet plain>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/confirmation" element={<Confirm />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
