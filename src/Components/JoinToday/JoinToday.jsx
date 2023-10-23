import React from "react";
import "./JoinToday.css";

export default function JoinToday() {
  const [image, setImage] = React.useState();
  const [isLoading, setIsLoading] = React.useState();

  const Movie_credits_url =
    process.env.REACT_APP_IMAGE_URL +
    `w200/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg
    `;
  const credits_url =
    process.env.REACT_APP_BASE_URL + `movie/550/credits?language=en-US`;
  // `w1920_and_h800_multi_faces_filter\(duotone,190235,ad47dd\)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  const FetchData = async () => {
    setIsLoading(true);

    try {
      //   const promise_image = fetch(Movie_credits_url, options).then((response) =>
      //     response.json()
      //   );
      const promise_credits = fetch(credits_url, options).then((response) =>
        response.json()
      );

      const results = await Promise.all([promise_credits]);

      const data = results;

      //   setImage(data);
      console.log(data);

      setIsLoading((prev) => prev);
    } catch (error) {
      console.error("error - " + error);
    }
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="container">
      <div className="join-today">
        <div className="join-today-title">Join Today</div>
        <div className="join-today-inner">
          <div className="join-today-right">
            <div className="join-today-right-text">
              Get access to maintain your own custom personal lists, track what
              you've seen and search and filter for what to watch
              next—regardless if it's in theatres, on TV or available on popular
              streaming services like Netflix, Apple TV Plus, Rakuten TV, MUBI,
              and FilmBox+.
            </div>
            <div className="join-today-right-btn"></div>
          </div>
          <div className="join-today-left">
            <ul>
              <li>Enjoy TMDB ad free</li>
              <li>Maintain a personal watchlist</li>
              <li>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li>Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
