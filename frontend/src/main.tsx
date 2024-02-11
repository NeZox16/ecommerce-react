import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.scss";
import { Provider } from "react-redux";
import {store} from "./redux/index.js";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.js"

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
ReactDOM.createRoot(document.getElementById("root-app")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
