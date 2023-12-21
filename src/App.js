import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import CreateAdds from "./pages/CreateAdds";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import MediaAd from "./pages/MediaAd";
import TextAd from "./pages/TextAd";

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createadds" element={<CreateAdds />}></Route>
        <Route path="/media-ad" element={<MediaAd />}></Route>
        <Route path="/text-ad" element={<TextAd />}></Route>
      </Routes>
    </>
  );
}

export default App;
