import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

const colors = ["dark", "light", "danger", "success", "primary"];

const Anime = ({ match, setisalert }) => {
  const [anime, setanime] = useState(null);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    getResource();
    // eslint-disable-next-line
  }, []);

  const getResource = async () => {
    setloading(true)
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v3/anime/${match.params.mal_id}`
      );
      const genres = res.data.genres.map((g) => {
        return { name: g.name, mal_id: g.mal_id };
      });
      setanime({
        mal_id: res.data.mal_id,
        title: res.data.title,
        episodes: res.data.episodes,
        synopsis: res.data.synopsis,
        score: res.data.score,
        air: res.data.aired.string,
        image_url: res.data.image_url,
        status: res.data.status,
        genres,
      });
    } catch (err) {
      setisalert(true);
    }
    setloading(false)
  };
  if(loading===true) return <Spinner />
  return (
    <Fragment>
      {anime && (
        <Fragment>
          <h1 className='text-center' style={{ marginBottom: "1.5rem" }}>
            {" "}
            {anime.title}
          </h1>

          <div style={Gallerystyle} className='card'>
            <div>
              <img
                src={anime.image_url}
                alt='anime img'
                className='img'
                style={{ maxWidth: "300px", margin: "auto", display: "block" }}
              />
              <br />
              <h2 className='text-center'>
                <strong> Score : {anime.score}</strong>
                <br />
                <strong> {anime.status} </strong>
              </h2>
            </div>

            <p className='p-2'>{anime.synopsis}</p>
          </div>

          <div className='text-center m-1'>
            <h4>No. of episodes : {anime.episodes}</h4>
            <h4>Timeline : {anime.air}</h4>
            <br />
            {anime.genres.map((g, idx) => (
              <button
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

export default Anime;
