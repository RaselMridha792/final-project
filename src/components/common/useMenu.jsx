import axios from "axios";
import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/menu")
    .then((res) => {
      setMenuItems(res.data);
      setLoading(false);})
  }, []);
  return [menuItems, loading];
};
