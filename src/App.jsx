import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainLayout from "@/Pages/Layout/MainLayout";
import DashboardLayout from "@/Pages/Layout/DashboardLayout";

import Home from "@/Pages/Home";
import ViewArticle from "./Pages/ViewArticle/index";
import Categories from "@/Pages/Categories/index";
import Dashboard from "@/Pages/Dashboard/index";
import CreatePost from "@/Pages/CreatePost/index";
import Login from "@/Pages/Login";

import { getPostsAction } from "@/reducers/BlogPostReducers";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  // https://mini-blog-server.vercel.app

  axios.get("https://mini-blog-server.vercel.app/api/posts").then((res) => {
    console.log(res.data);
    if (res.data.success) {
      dispatch(getPostsAction(res.data.success));
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/blog/article/:id" element={<ViewArticle />} />
          <Route path="/blog/:category" element={<Categories />} />
          <Route path="/blog/login" element={<Login />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/blog/dashboard" element={<Dashboard />} />
          <Route path="/blog/create" element={<CreatePost />} />
        </Route>
        {/* <Route element={<MainLayout />}>

        </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
