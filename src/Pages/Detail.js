import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../Components/config";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return movie ? (
    <div className="flex">
      <div>
        <img
          src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable}
          alt={movie.title}
          className="w-64"
        />
      </div>
      <div className="ml-4">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p>{movie.overview}</p>
        <p className="mt-2"><strong>Release date:</strong> {movie.release_date}</p>
        <p><strong>Average vote:</strong> {movie.vote_average}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Detail;

