import { useEffect, useState } from "react";
import axios from "axios";
// export const proxy = "http://localhost:5000/blog";
export const proxy = "https://mini-blog-server.vercel.app";

// Get Request function
const useFetch = (endpoint) => {
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `${proxy}/${endpoint}`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(url);

      setDate(response.data.success);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
