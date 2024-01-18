import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { routes } from "@/util/index";
import DeleteButton from "@/components/Button";

const Card = ({ articles }) => {
  if (!articles) return;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-col gap-31 p-2 bg-neutral-800 cursor-pointer hover:[&_]:hover:bg-neutral-700 rounded"
        >
          <div className="flex flex-col items-center1 gap-2 cursor-pointer">
            <div className="flex flex-col text-xs gap-2 ">
              <p className="line-clamp-2 capitalize">{article.title}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pe-5 mt-5 text-xs cursor-pointer">
            <DeleteButton Img_Id={article.imgId} id={article.id} />
            <Link
              to={`${routes[1]}/${article.id}`}
              className="flex items-center gap-1 rounded bg-neutral-900 px-2 py-1 hover:bg-transparent hover:bg-neutral-950"
            >
              <EyeIcon className="w-5 h-3" />
              <p>Read</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const index = () => {
  const { posts } = useSelector((state) => state.blogPosts);

  return (
    <div className="border border-y-0 border-x-neutral-700 overflow-y-scroll h-[90vh] lg:h-[79vh] p-10">
      <Card articles={posts} />
    </div>
  );
};

export default index;
