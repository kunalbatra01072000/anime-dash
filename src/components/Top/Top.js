import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayTop from "./DisplayTop";

const Top = ({ type }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getResource();
    // eslint-disable-next-line
  }, []);

  const getResource = async () => {
    const res = await axios.get(
      `https://api.jikan.moe/v3/top/${type.toLowerCase()}/1`
    );
    const resource = res.data.top.slice(0, 9).map((item) => {
      const { mal_id, title, image_url, score } = item;
      return { mal_id, title, image_url, score };
    });
    setdata(resource);
  };
  return (
    <div>
      <h1 className='text-center'>Top {type}</h1>
      {data.length !== 0 && (
        <DisplayTop resource={data} type={type.toLowerCase()} />
      )}
    </div>
  );
};

export default Top;
