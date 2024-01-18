import { Link } from "react-router-dom";
import { routes, imageUrl } from "@/util/index";

const Post = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-10 py-10 lg:w-2/3">
      {data &&
        data.map((post, index) => (
          <Link
            key={index}
            to={`${routes[1]}/${post.id}`}
            className="flex flex-col gap-8 duration-500 delay-75 border-b border-neutral-900 pb-5 text 
            lg:flex-row hover:[&_article]:text-red-600 hover:scale-95"
          >
            <img
              src={imageUrl(post.imgId)}
              className="w-full rounded lg:w-44"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.4rem] font-semibold">{post.title}</p>
              <p
                className="font-light line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.text }}
              ></p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Post;
