import { useSelector } from "react-redux";
import Post from "@/components/Post";
import Home from "@/components/Home";

const index = () => {
  const { posts } = useSelector((state) => state.blogPosts);
  return (
    <div className="container mx-auto p-5">
      <Home data={posts} title="Happenings" />
      <Post data={posts} />
    </div>
  );
};

export default index;
