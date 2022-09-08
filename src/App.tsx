import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Tailwind from "./routes/tailwind/tailwind.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/tailwind" element={<Tailwind />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
