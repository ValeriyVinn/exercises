import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./layouts/SharedLayout";
import VanillaMenu from "./layouts/VanillaMenu";
import ReactLayout from "./layouts/ReactLayout";
import CounterOnHooks from "./components/React/CounterOnHooks/CounterOnHooks";
import BasicComponents from "./components/React/01-BasicComponents/BasicComponests";
import JacquesWhereIsYourSmile from "./components/React/JacquesWhereIsYourSmile/JacquesWhereIsYourSmile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/vanilla-js" element={<VanillaMenu />} />
        <Route path="/react" element={<ReactLayout />}>
          <Route path="basic-components" element={<BasicComponents />} />
          <Route
            path="basic-components/task-one"
            element={<CounterOnHooks />}
          />
          <Route
            path="basic-components/jacques-where-is-your-smile"
            element={<JacquesWhereIsYourSmile />}
          />
        </Route>
        <Route path="/redux" element={<h1>Redux</h1>} />
        <Route path="/node-js" element={<h1>Node JS</h1>} />
        <Route path="*" element={<h1>Element not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
