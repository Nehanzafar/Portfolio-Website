import { type RouteObject } from "react-router";
import ErrorElement from "../routes/ErrorElement";
import Root from "../routes/root";
import type { navJson } from "./portfolio-website.d.ts";
import Components from "../utils/staticImports.tsx";
import type { ReactNode } from "react";
// import Home from "../routes/Home.tsx";

interface componentObj {
  [name: string]: () => ReactNode;
}

function createRoutesFromJSON(
  obj: navJson,
  routeElements: componentObj
): RouteObject {
  if (obj.isIndex) {
    const Elem = routeElements[obj.name];
    const tmp = {
      index: obj.isIndex,
      element: <Elem />,
      action: obj.action ? eval(`${obj.name.toLowerCase()}Action`) : undefined,
      loader: obj.loader ? eval(`${obj.name.toLowerCase()}Loader`) : undefined,
    };
    return tmp;
  } else {
    const Elem = routeElements[obj.name];
    const routePath = "/" + obj.name.toLowerCase();
    const tmp = {
      path: routePath,
      element: <Elem />,
      action: obj.action ? eval(`${obj.name.toLowerCase()}Action`) : undefined,
      loader: obj.loader ? eval(`${obj.name.toLowerCase()}Loader`) : undefined,
    };
    return tmp;
  }
}

export default function routesGenerator(navList: navJson[]) {
  const childrenRoutes = navList.map((obj: navJson) => {
    return createRoutesFromJSON(obj, Components);
  });

  const routes: RouteObject = {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: childrenRoutes,
  };
  return routes;
}

//   const routes: RouteObject = {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorElement />,
//     children: [
//       {
//         element: <Home/>,
//         index: true
//       },
//       {
//         element: <About/>,
//         path: "/about"
//       },
//       {
//         element: <Contact/>,
//         path: "/contact"
//       },
//       {
//         element: <Projects/>,
//         path: "/projects"
//       }
//     ],
//   };
// export default routes