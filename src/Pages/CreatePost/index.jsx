import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { proxy, imageUrl } from "@/util/index";
import ImagePreview from "@/components/create/ImagePreview";
import Categories from "@/components/create/Categories/index";

const index = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState();

  //---------Find post to update using the id---------
  const post_to_update = location ? location.state : "";

  const [title, setTitle] = useState(post_to_update && post_to_update.title);
  const [category, setCategory] = useState(
    post_to_update && post_to_update.category
  );
  const [text, setText] = useState(post_to_update && post_to_update.text);
  const [img, setImg] = useState();
  const [imgPreviewurl, setImgPreview] = useState(
    post_to_update && imageUrl(post_to_update.imgId)
  );

  //------Combine text and Images------
  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("category", category);
  formdata.append("text", text);
  formdata.append("file", img);
  //-----------For editing-----------
  formdata.append("id", post_to_update && post_to_update.id);
  formdata.append("imgId", post_to_update && post_to_update.imgId);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["code-block"],
      ],
    },
  };
  //------Preview image function------
  const handlePreview = (event) => {
    if (event) {
      const image = event.target.files[0];
      setImg(image);
      setImgPreview(URL.createObjectURL(image));
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    let response;
    if (location.state) {
      // Update post
      response = await axios.put(`${proxy}/api/posts/update`, formdata);
      if (response.data.success) {
        alert("Post Updated");
        navigation("/blog/dashboard");
      }
      setIsLoading(false);
      if (response.data.error) {
        alert(response.data.error);
      }
    } else {
      //-----------Create Post-----------
      response = await axios.post(`${proxy}/api/posts/create`, formdata);
      if (response.data.success) {
        //------Clear input Fields------
        setTitle("");
        setText("");
        setCategory("");
        setImgPreview("");
        setImg("");
        setIsLoading(false);
        alert(response.data.success);
      }
      if (response.data.error) {
        alert(response.data.error);
      }
    }
  };

  return (
    <div
      className="
        flexflex-col justify-between text-xs p-5 lg:p-10 border border-y-0
         border-l-neutral-700 overflow-y-scroll h-[90vh] lg:h-[79vh]"
    >
      <form className="flex flex-col gap-5">
        <ImagePreview
          img={imgPreviewurl || ""}
          onchange={(event) => handlePreview(event)}
        />
        <Categories
          value={title || ""}
          defaultValue={category}
          onchange={(event) => setTitle(event.target.value)}
          selectOption={(event) => setCategory(event.target.value)}
        />

        <ReactQuill
          value={text}
          placeholder="Write post content here"
          onChange={(event) => setText(event)}
          modules={modules}
          theme="snow"
          className="w-[100%] h-96 lg:h-60 mb-20 text-white"
        />
      </form>
      <div className="flex gap-3 text-white [&_button]:bg-neutral-700">
        <button
          disabled={isLoading}
          className={
            !isLoading
              ? "py-2 px-4 rounded hover:bg-neutral-400"
              : "py-2 px-4 rounded bg-slate-400"
          }
          onClick={() => handleSubmit()}
        >
          {!isLoading ? "Pulbish" : "Loading..."}
        </button>
      </div>
    </div>
  );
};

export default index;

// // import {
// //   HandleCategory,
// //   HandleImagePreview,
// //   Spinner,
// //   img_url,
// //   proxy,
// // } from "../../component/index";

// const index = () => {
//   const location = useLocation();
//   const navigation = useNavigate();
//   const [isLoading, setIsLoading] = useState();

//   // Find post to update using the id
//   const post_to_update = location ? location.state : "";

//   const [title, setTitle] = useState(post_to_update && post_to_update.title);
//   const [category, setCategory] = useState(
//     post_to_update && post_to_update.category
//   );
//   const [text, setText] = useState(post_to_update && post_to_update.text);
//   const [img, setImg] = useState();
//   const [imgPreviewurl, setImgPreview] = useState(
//     post_to_update && img_url(post_to_update.imgId)
//   );

//   // Combine text and Images
//   const formdata = new FormData();
//   formdata.append("title", title);
//   formdata.append("category", category);
//   formdata.append("text", text);
//   formdata.append("file", img);
//   // For editing
//   formdata.append("id", post_to_update && post_to_update.id);
//   formdata.append("imgId", post_to_update && post_to_update.imgId);

//   const modules = {
//     toolbar: {
//       container: [
//         [{ header: [1, 2, false] }],
//         ["bold", "italic", "underline"],
//         ["code-block"],
//       ],
//     },
//   };

//   // Preview image function
//   const handlePreview = (event) => {
//     if (event) {
//       const image = event.target.files[0];
//       setImg(image);
//       setImgPreview(URL.createObjectURL(image));
//     }
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     let response;
//     if (location.state) {
//       // Update post
//       response = await axios.put(`${proxy}/update`, formdata);
//       if (response.data.success) {
//         navigation("/dashboard");
//       }
//       setIsLoading(false);
//       if (response.data.error) return alert(response.data.error);
//     } else {
//       // Create Post
//       response = await axios.post(`${proxy}/create`, formdata);
//       if (response.data.success) {
//         // Clear input Fields
//         setTitle("");
//         setText("");
//         setCategory("");
//         setImgPreview("");
//         setImg("");
//         setIsLoading(false);
//         alert(response.data.success);
//       }
//       if (response.data.error) return alert(response.data.error);
//     }
//   };

//   return (
//     <div
//       className="
//         flexflex-col justify-between text-xs p-5 lg:p-10 border border-y-0 border-l-neutral-700 overflow-y-scroll h-[90vh] lg:h-[79vh]"
//     >
//       <form className="flex flex-col gap-5">
//         <HandleImagePreview
//           img={imgPreviewurl || ""}
//           onchange={(event) => handlePreview(event)}
//         />
//         <HandleCategory
//           value={title || ""}
//           defaultValue={category}
//           onchange={(event) => setTitle(event.target.value)}
//           selectOption={(event) => setCategory(event.target.value)}
//         />

//         <ReactQuill
//           value={text}
//           placeholder="Write post content here"
//           onChange={(event) => setText(event)}
//           modules={modules}
//           theme="snow"
//           className="w-[100%] h-96 lg:h-60 mb-20 text-white"
//         />
//       </form>
//       <div className="flex gap-3 text-white [&_button]:bg-blue-700">
//         <button
//           disabled={isLoading}
//           className="py-2 px-4 rounded hover:bg-blue-400"
//           onClick={() => handleSubmit()}
//         >
//           {!isLoading ? "Pulbish" : <Spinner />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default index;
