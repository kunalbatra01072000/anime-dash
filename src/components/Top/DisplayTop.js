import { Link } from "react-router-dom";
const DisplayTop = ({ resource, type }) => {
  const displayitem = resource.map((item) => (
    <div className='card text-center' key={item.mal_id}>
      <img
        src={item.image_url}
        alt='resource_image'
        style={{ maxHeight: "300px" }}
      />
      <h3> {item.title}</h3>
      {item.score && <h4>Score : {item.score}</h4>}
      <Link to={`/${type}/${item.mal_id}`} className='btn btn-primary'>
        More Info
      </Link>
    </div>
  ));
  return <div style={Gallerystyle}>{displayitem}</div>;
};
const Gallerystyle = {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
  gridGap: "1rem",
};
export default DisplayTop;
