import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://young-river-68187.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      });
  }, []);
  return [inventories, setInventories];
};

export default useInventories;
