import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Policy from "./policy";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/policy",
    element: (
      <Layout>
        <Policy />
      </Layout>
    ),
  },
]);

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
