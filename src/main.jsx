import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import { Login } from "./Components/index.js";

import AddPost from "./Pages/AddPost.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import EditPosts from "./Pages/EditPosts.jsx";

import Post from "./Pages/Post.jsx";

import AllPosts from "./Pages/AllPosts.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/all-posts" element={<AllPosts />} />
      <Route path="/edit-post/:slug" element={<EditPosts />} />
      <Route path="/post/:slug" element={<Post />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
