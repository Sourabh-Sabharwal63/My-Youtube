import { useEffect, useState } from "react";
import { Youtube_API } from "../utility/constant";
import { useDispatch } from "react-redux";
import { changeVideos } from "../utility/Redux/appSlice";
const useGetVideos = () => {
  const dispatch = useDispatch();
  const [api_data, setApiData] = useState(null);
  const getData = async () => {
    const data = await fetch(Youtube_API);
    setApiData(await data.json());
  };

  useEffect(() => {
    getData();
    if (api_data) {
      dispatch(changeVideos(api_data.items));
    }
  }, [api_data, dispatch]);
};

export default useGetVideos;
