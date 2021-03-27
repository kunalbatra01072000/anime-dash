import axios from "axios";
import { useState } from "react";
import DisplayTop from "../Top/DisplayTop";
import InputForm from "./InputForm";

const Search = () => {
  const [resource, setresource] = useState([]);

  const getResource = async (text, type) => {
    const res = await axios.get(
      `https://api.jikan.moe/v3/search/${type}?q=${text}&page=1`
    );

    const data = res.data.results.map((item) => {
      let title;
      if (type === "character") {
        title = item.name;
      } else {
        title = item.title;
      }
      return {
        title,
        score: item.score,
        image_url: item.image_url,
        mal_id: item.mal_id,
      };
    });
    if (type === "character") type = "characters";
    setresource({
      type,
      data,
    });
  };
  return (
    <div>
      <InputForm getResource={getResource} />
      {resource.length !== 0 && (
        <DisplayTop type={resource.type} resource={resource.data} />
      )}
    </div>
  );
};

export default Search;
