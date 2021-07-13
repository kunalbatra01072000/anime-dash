import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Character = ({ match, setisalert }) => {
  const [character, setcharacter] = useState(null);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    getResource();
    // eslint-disable-next-line
  }, []);

  const getResource = async () => {
    setloading(true);
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v3/character/${match.params.mal_id}`
      );
      const animeappeared = res.data.animeography.map((ani) => {
        return { mal_id: ani.mal_id, name: ani.name, image_url: ani.image_url };
      });
      const mangaappeared = res.data.mangaography.map((ani) => {
        return { mal_id: ani.mal_id, name: ani.name, image_url: ani.image_url };
      });
      setcharacter({
        mal_id: res.data.mal_id,
        name: res.data.name,
        about: res.data.about.slice(0, 1200),
        image_url: res.data.image_url,
        animeappeared,
        mangaappeared,
      });
    } catch (err) {
      setisalert(true);
    }
    setloading(false);
  };
  if(loading===true) return <Spinner/>
  return (
    <Fragment>
      {character && (
        <Fragment>
          <h1 className='text-center' style={{ marginBottom: "1.5rem" }}>
            {" "}
            {character.name}
          </h1>
          <div style={Gallerystyle} className='card'>
            <img
              src={character.image_url}
              alt='character img'
              className='img'
              style={{ maxWidth: "300px", margin: "auto", display: "block" }}
            />

            <p className='p-2'>{character.about}</p>
          </div>
          <br />
          <div style={{ marginBottom: "2rem", paddingTop: "1rem" }}>
            <h3>Animeography : </h3>
            <div style={Gallerystyle} className='card'>
              {character.animeappeared.map((ani) => (
                <div key={ani.mal_id} className='card text-center'>
                  <img
                    src={ani.image_url}
                    alt='resource_image'
                    style={{ maxHeight: "250px", maxWidth: "250px" }}
                  />
                  <h4> {ani.name}</h4>
                  <Link to={`/anime/${ani.mal_id}`} className='btn btn-dark'>
                    More Info
                  </Link>
                </div>
              ))}
            </div>
            <br />
            <h3>Mangaography : </h3>
            <div style={Gallerystyle} className='card'>
              {character.mangaappeared.map((mag) => (
                <div key={mag.mal_id} className='card text-center'>
                  <img
                    src={mag.image_url}
                    alt='resource_image'
                    style={{ maxHeight: "250px", maxWidth: "250px" }}
                  />
                  <h4> {mag.name}</h4>
                  <Link to={`/manga/${mag.mal_id}`} className='btn btn-light'>
                    More Info
                  </Link>
                </div>
              ))}
            </div>
          </div>
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

export default Character;
