import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

const colors = ["dark", "light", "danger", "success", "primary"];

const Manga = ({ match, setisalert }) => {
  const [manga, setmanga] = useState(null);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    getResource();
    // eslint-disable-next-line
  }, []);

  const getResource = async () => {
    setloading(true);
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v3/manga/${match.params.mal_id}`
      );
      const genres = res.data.genres.map((g) => {
        return { name: g.name, mal_id: g.mal_id };
      });
      setmanga({
        mal_id: res.data.mal_id,
        title: res.data.title,
        synopsis: res.data.synopsis,
        score: res.data.score,
        air: res.data.published.string,
        image_url: res.data.image_url,
        status: res.data.status,
        genres,
      });
    } catch (err) {
      setisalert(true);
    }
    setloading(false);
  };
  if(loading===true) return <Spinner />
  return (
      <Fragment>
      {manga && (
        <Fragment>
          <h1 className='text-center' style={{ marginBottom: "1.5rem" }}>
            {" "}
            {manga.title}
          </h1>

          <div style={Gallerystyle} className='card'>
            <div>
              <img
                src={manga.image_url}
                alt='manga img'
                className='img'
                style={{ maxWidth: "300px", margin: "auto", display: "block" }}
              />
              <br />
              <h2 className='text-center'>
                <strong> Score : {manga.score}</strong>
                <br />
                <strong> {manga.status} </strong>
              </h2>
            </div>

            <p className='p-2'>{manga.synopsis}</p>
          </div>

          <div className='text-center m-1'>
            <h4>Timeline : {manga.air}</h4>
            <br />
            {manga.genres.map((g, idx) => (
              <button
                to='/'
                className={`btn btn-${colors[idx % colors.length]}`}
                key={g.mal_id}
              >
                {g.name}
              </button>
            ))}
          </div>

          <br />
        </Fragment>
      )}
    </Fragment>
    
    
  );
};

const Gallerystyle = {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
  gridGap: "1rem",
};
export default Manga;
