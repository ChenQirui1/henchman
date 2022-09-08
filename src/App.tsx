import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Tailwind from "./routes/tailwind/tailwind.component";
import Home from "./routes/home/home.component";
import tailwindData from "./assets/tailwind.json";
import WebElement from "./components/web-element/web-element.component";

const App = () => {
  const { categories } = tailwindData;

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/tailwind" element={<Tailwind cate={categories} />}>
          {categories.map((cat) => (
            <Route path={cat.toLowerCase()} element={<WebElement />}></Route>
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
