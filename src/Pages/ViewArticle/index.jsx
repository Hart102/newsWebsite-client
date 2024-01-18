import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { find_item, img_url, Spinner, proxy } from "../component/index";
import { proxy, imageUrl, routes } from "@/util/index";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// const icons = [
//   { icon: faFacebookF, label: "Share" },
//   { icon: faTwitter, label: "Tweet" },
//   { icon: faLinkedin, label: "Share" },
// ];

const index = () => {
  const [session, setSession] = useState(false);

  useEffect(() => {
    axios
      .get(`${proxy}/api/user/session`)
      .then((response) =>
        response.data.success ? setSession(true) : setSession(false)
      );
  }, []);

  const params = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.blogPosts);
  const post = posts.find((post) => post.id == params.id);

  const navigate_to_edit = () => navigate(routes[4], { state: post });

  // if (!post) return <Spinner className={"w-screen h-screen"} />;

  return (
    <div className="w-full lg:w-2/3 mx-auto px-5 mt-14">
      <div className="grid grid-cols-1 gap- py-10 items-center lg:grid-cols-">
        <div className="my-3">
          <p className="capitalize font-bold text-2xl lg:text-6xl">
            {post && post.title}
          </p>
          <div>
            <span>by Taylor Louis in Community</span>
            <p className="text-sm text-neutral-600 mb-6">
              {post && post.published}
            </p>
          </div>
          <img src={post && imageUrl(post.imgId)} />
        </div>
        <div className="flex flex-col gap-3 lg:px-1">
          <div
            onClick={navigate_to_edit}
            className={
              session
                ? "flex justify-center w-[40px] py-2 px-5 border border-neutral-400 cursor-pointer text-xs rounded text-neutral-100 hover:bg-neutral-700"
                : "hidden"
            }
          >
            <p>Edit</p>
          </div>
        </div>
      </div>
      <article className="w-full mx-auto pb-10 leading-9 font-light text-justify lg:pt- lg:pb-10 lg:w-[100%]">
        <div dangerouslySetInnerHTML={{ __html: post && post.text }}></div>
      </article>
    </div>
  );
};

export default index;
