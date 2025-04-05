import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import VanillaMenu from "./components/VanillaMenu/VanillaMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<h1>Home</h1>} />
       <Route path="/exercises" element={<h1>Exercises</h1>}></Route>
      {/* <Route path="/vanilla-js" element={<h1>Vanilla</h1>}></Route> */}
      <Route path="/vanilla-js" element={<VanillaMenu/>}></Route>
      <Route path="/react" element={<h1>React</h1>}></Route>
      <Route path="/redux" element={<h1>Redux</h1>}></Route>
      <Route path="/node-js" element={<h1>Node JS</h1>}></Route>
      <Route path="*" element={<h1>Element not found</h1>} />       
      </Route>

    </Routes>
  );
}

export default App;
