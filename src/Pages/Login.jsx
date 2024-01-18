import axios from "axios";
import { useEffect, useState } from "react";
// import { Spinner, proxy } from "../component/index";
import { proxy } from "@/util";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return alert("field cannot be empty!");
    setLoading(true);

    const response = await axios.post(`${proxy}/api/user/login`, {
      username,
      password,
    });
    setLoading(false);

    if (response.data.success) navigate("/blog/dashboard");
    if (response.data.error) alert(response.data.error);
  };

  useEffect(() => {
    axios
      .get(`${proxy}/api/user/session`)
      .then((response) => response.data.success && navigate("/dashboard"));
  }, []);

  const input_class =
    "bg-transparent py-2 px-4 border border-neutral-400 focus:outline-0 focus:border-white rounded-full my-2";
  return (
    <form className="p-5 lg:p-20 h-[70vh] flex items-center">
      <div className="w-[70%] lg:w-[500px] mx-auto flex flex-col gap-3 rounded bg-neutral-900 lg:mt-10 p-3 lg:p-10">
        <input
          type="text"
          className={input_class}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          className={input_class}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="bg-gray-800 p-2 rounded-full hover:bg-gray-900"
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Login;
