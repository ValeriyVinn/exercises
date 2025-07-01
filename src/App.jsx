import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./layouts/SharedLayout";
import ReactLayout from "./layouts/ReactLayout";
import CounterOnHooks from "./components/React/04-Hooks/CounterOnHooks/CounterOnHooks";
// import BasicComponents from "./components/React/01-BasicComponents/BasicComponests";
import JacquesWhereIsYourSmile from "./components/React/01-BasicComponents/JacquesWhereIsYourSmile/JacquesWhereIsYourSmile";
import ToDoList from "./components/Home/ToDoList/ToDoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ToDoList />} />
        <Route path="/react" element={<ReactLayout />} />
        {/* 01 Basic Components, Props and Styling*/}
        <Route
          path="basic-components/jacques-where-is-your-smile"
          element={<JacquesWhereIsYourSmile />}
        />
        {/* 02 Events and State. Forms */}
        {/* 03 Component Lifecycle. Working with REST API*/}
        {/* 04 Hooks (useState, useEffect, useRef, useMemo, etc.)*/}
        <Route path="hooks/counter-on-hooks" element={<CounterOnHooks />} />
        {/* 05 React Router*/}
        {/* 06 Advanced Composition Patterns (render props, HOC, children as function)*/}
        {/* 07 Component Testing (Jest, React Testing Library)*/}
        {/* 08 Context (React Context API, useContext)*/}

        <Route path="/redux" element={<h1>Redux</h1>} />
        <Route path="/nextjs" element={<h1>Next.js</h1>} />
        <Route path="/node-js" element={<h1>Node JS</h1>} />
        <Route path="*" element={<h1>Element not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
