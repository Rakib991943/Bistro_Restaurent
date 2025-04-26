import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then(res => res.json())
      .then(data => {

        setMenu(data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching menu:", error)); // ✅ Handle errors
  }, []);
  return [menu, loading]
}

export default useMenu;