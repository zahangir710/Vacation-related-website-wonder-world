import { useEffect, useState } from "react";

const useRidesData = () => {
  const [isLoadding, setIsLoadding] = useState(true);
  const [rides, setRides] = useState([]);
  useEffect(() => {
    setIsLoadding(true);
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setRides(data);
        setIsLoadding(false);
      });
  }, []);
  return [rides, isLoadding];
};
export default useRidesData;
