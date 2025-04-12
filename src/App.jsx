import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./layouts/SharedLayout";
import VanillaMenu from "./components/VanillaMenu/VanillaMenu";
import ReactLayout from "./layouts/ReactLayout";
import CounterOnHooks from "./components/React/CounterOnHooks/CounterOnHooks";
import CounterSolution from "./components/React/CounterOnHooks/CounterSolution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/vanilla-js" element={<VanillaMenu />}></Route>
        <Route path="/react" element={<ReactLayout />}>
          <Route path="a"element={<CounterOnHooks/>}></Route>
        </Route>
        <Route path="/redux" element={<h1>Redux</h1>}></Route>
        <Route path="/node-js" element={<h1>Node JS</h1>}></Route>
        <Route path="*" element={<h1>Element not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
