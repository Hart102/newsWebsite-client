import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { proxy } from "@/util/index";
import { deletepostAction } from "../../reducers/BlogPostReducers";

const DeleteButton = ({ Img_Id, id }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(false);

  const deletePost = async () => {
    setIsloading(true);
    if ((Img_Id, id)) {
      const response = await axios.post(`${proxy}/api/posts/delete`, {
        Img_Id,
        id,
      });
      if (response.data.success) {
        dispatch(deletepostAction(id));
        alert(response.data.success);
      }
      setIsloading(false);
      if (response.data.error) alert(response.data.error);
    }
  };
  return (
    <button
      disabled={isLoading}
      className={
        !isLoading
          ? "px-2 py-1 rounded bg-red-500"
          : "px-2 py-1 rounded bg-red-300 text-black"
      }
      onDoubleClick={deletePost}
    >
      {!isLoading ? "Delete" : "Deleting..."}
    </button>
  );
};

export default DeleteButton;
