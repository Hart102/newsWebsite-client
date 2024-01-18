import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Post from "@/components/Post";
import Home from "@/components/Home";

const index = () => {
  const params = useParams();
  const navigate = useNavigate();
  //   const [selected_category, setSelected_category] = useState("");

  const { posts, isLoading } = useSelector((state) => state.blogPosts);

  let filtered_post = "";
  if (posts && params) {
    filtered_post = posts.filter((post) => post.category == params.category);
  }

  // useEffect(() => {
  //   if (!params) return navigate("/");
  //   if (isLoading) return <Spinner className={"w-screen h-screen"} />;
  // }, []);

  return (
    <div className="container mx-auto p-5">
      <Home data={filtered_post} title={params.category} className="hidden" />
      <Post data={filtered_post} />
    </div>
  );
};

export default index;
