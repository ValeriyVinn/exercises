// import { Outlet } from "react-router-dom";
// import css from "./ReactLayout.module.css";
// import ReactMenu from "./ReactMenu";

// const ReactLayout = () => {
//   return (
//     <div className={css.reactPage}>
//       <div className={css.navItem}>
//         <ReactMenu className={css.reactMenu} />
//       </div>
//       <main className={css.reactMain}>
//         <h1>React</h1>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default ReactLayout;

import { Outlet } from "react-router-dom";
import css from "./ReactLayout.module.css";

const ReactLayout = () => {
  return (
    <div className={css.reactPage}>
      <main className={css.reactMain}>
        <h1>React</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default ReactLayout;
