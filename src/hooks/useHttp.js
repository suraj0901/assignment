import { useEffect, useState } from "react";

export default ({ children, url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (error) {
      setError(true);
      return;
    }
  };
  useEffect(() => fetchData(url), []);
  if (error)
    return <div className="container p-4 text-danger">Server Error</div>;
  if (loading) return <div className="container p-4 ">...Loading</div>;
  return children;
};
