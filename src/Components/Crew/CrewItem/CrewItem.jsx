import React from "react";
import "./CrewItem.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonPage from "../../Person/PersonPage/PersonPage";

export default function CrewItem({ member }) {
  const { navigate } = useNavigate();
  const { id } = useParams();
  const [crewMembers, setCrewMembers] = React.useState({});

  const handleRedirectToPerson = (e) => {
    const itemId = e.target.getAttribute("value");
    return navigate(<PersonPage id={id} />);
  };

  // React.useEffect(() => {
  //   if (member.length > 0) {
  //     crewMembersArray();
  //     return () => {
  //       console.log("Updated crewMembers:", member);
  //     };
  //   }
  // }, []);

  console.log(member);

  const crewMembersArray = () => {
    // const crewMembersArrayById = {};
    // member.forEach((item) => {
    //   const id = item.id;
    //   if (crewMembersArrayById[id]) {
    //     crewMembersArrayById[id] = crewMembersArrayById[id].map((member) =>
    //       member.id === item.id ? { ...member, job: item.job } : member
    //     );
    //   } else {
    //     crewMembersArrayById[id] = [
    //       {
    //         id: item.id,
    //         name: item.name,
    //         job: item.job,
    //         photo: item.photo,
    //         popularity: item.popularity,
    //       },
    //     ];
    //   }
    // });
    // const updatedCrewMembersArrayById = JSON.parse(
    //   JSON.stringify(crewMembersArrayById)
    // );
    // setCrewMembers((prevState) => ({
    //   ...prevState,
    //   crewMembersArrayById: updatedCrewMembersArrayById,
    // }));
    // console.log("work");
    // console.log(crewMembersArrayById);
    // console.log(updatedCrewMembersArrayById);
  };

  // const MemberPhotoStatus = (member) => {
  //   {
  //     member.photo_path ? (
  //       <div>{member.photo_path}</div>
  //     ) : Array.isArray(member.photo) ? (
  //       <div>{member.photo.join(" ")}</div>
  //     ) : <div>{member.photo}</div> ? (
  //       <div>{member.photo}</div>
  //     ) : null;
  //   }
  // };

  const HandleCrewImage = () => {
    return (
      <div>
        {(() => {
          if (member.profile_path) {
            return (
              <img
                src={
                  `${process.env.REACT_APP_IMAGE_URL}` +
                  "w200" +
                  `${member.profile_path}`
                }
                className="cast-people-photo"
                alt=""
              />
            );
          } else if (member.photo) {
            return (
              <img
                src={
                  `${process.env.REACT_APP_IMAGE_URL}` +
                  "w200" +
                  `${member.photo}`
                }
                className="cast-people-photo"
                alt=""
              />
            );
          } else {
            return <PersonRoundedIcon className="cast-people-photo-icon" />;
          }
        })()}
      </div>
    );
  };

  return (
    <div>
      <div className="cast-people">
        <Link
          to={`/person/${member.id}-${member.name}`}
          value={member.id}
          onClick={handleRedirectToPerson}
          className="cast-people-photo-wrapper"
        >
          <HandleCrewImage />
        </Link>

        <div className="cast-people-text">
          <Link
            to={`/person/${member.id}-${member.name}`}
            value={member.id}
            onClick={handleRedirectToPerson}
            className="cast-people-name"
          >
            {member.name}
          </Link>
          {member.character ? (
            <div className="cast-people-character">{member.character}</div>
          ) : (
            <div>
              {member.job ? (
                <div className="cast-people-character">{member.job}</div>
              ) : (
                <div className="cast-people-character">
                  {member.known_for_department}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
