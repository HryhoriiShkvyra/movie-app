import React from "react";
import "./CrewItem.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonPage from "../../Person/PersonPage/PersonPage";

export default function CrewItem({ item }) {
  const { navigate } = useNavigate();
  const { id } = useParams();

  const handleRedirectToPerson = (e) => {
    const itemId = e.target.getAttribute("value");
    return navigate(<PersonPage id={id} />);
  };

  console.log(item);

  return (
    <div>
      <div className="cast-people" key={item.id}>
        {item.profile_path === null ? (
          <Link
            to={`/person/${item.id}-${item.name}`}
            value={item.id}
            onClick={handleRedirectToPerson}
            className="cast-people-photo-wrapper-icon"
          >
            <PersonRoundedIcon className="cast-people-photo-icon" />
          </Link>
        ) : (
          <Link
            to={`/person/${item.id}-${item.name}`}
            value={item.id}
            onClick={handleRedirectToPerson}
            className="cast-people-photo-wrapper"
          >
            <img
              src={process.env.REACT_APP_IMAGE_URL + "w200" + item.profile_path}
              className="cast-people-photo"
            />
          </Link>
        )}
        <div className="cast-people-text">
          <Link
            to={`/person/${item.id}-${item.name}`}
            value={item.id}
            onClick={handleRedirectToPerson}
            className="cast-people-name"
          >
            {item.name}
          </Link>
          {item.character ? (
            <div className="cast-people-character">{item.character}</div>
          ) : (
            <div>
              {item.job ? (
                <div className="cast-people-character">{item.job}</div>
              ) : (
                <div className="cast-people-character">
                  {item.known_for_department}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
