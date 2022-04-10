import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import LoadingRoutes from "./Components/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LoadingRoutes />
    </BrowserRouter>
  );
}

export default App;
