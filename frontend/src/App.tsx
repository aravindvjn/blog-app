import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProvider from "./global/Context";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<Favourites />} />
    </Routes>
  );
}

const Wrapper = () => {
  return (
    <UserProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true  }}>
        <App />
      </BrowserRouter>
    </UserProvider>
  );
};
export default Wrapper;
