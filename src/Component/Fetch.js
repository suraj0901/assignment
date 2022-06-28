import { useEffect, useState } from "react";

export default ({ children, url, setResult }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setResult(data);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  if (error) return <div className="container text-danger">Server Error</div>;
  if (loading) return <div className="container">...Loading</div>;
  return children;
};
