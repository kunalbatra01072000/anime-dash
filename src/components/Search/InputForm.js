import React, { useState } from "react";

const InputForm = ({ getResource }) => {
  const [text, settext] = useState("");
  const [opt, setopt] = useState("anime");
  const onSubmit = (e) => {
    e.preventDefault();
    getResource(text, opt);
    settext("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <select
            name='type'
            id='type'
            value={opt}
            onChange={(e) => setopt(e.target.value)}
            style={{ width: "200px", marginRight: "2rem", height: "40px" }}
          >
            <option value='anime'>Anime</option>
            <option value='manga'>Manga</option>
            <option value='character'>Character</option>
          </select>
          <input
            required
            value={text}
            onChange={(e) => settext(e.target.value)}
            type='text'
            placeholder='Enter keyword'
            minLength='3'
            style={{ height: "40px" }}
          ></input>
        </div>

        <input type='submit' value='Lets Go!' className='btn btn-block'></input>
      </form>
    </div>
  );
};

export default InputForm;
