import React from "react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [data, setData] = React.useState([
    {
      name: "Hryhorii",
      photo: "",
      allTimeEdits: 5009000,
      editsThisWeek: 251230,
    },
    {
      name: "Sergiy",
      photo: "",
      allTimeEdits: 4031230,
      editsThisWeek: 212000,
    },
    {
      name: "Ehor",
      photo: "",
      allTimeEdits: 3544250,
      editsThisWeek: 153250,
    },
    {
      name: "Oleksiy",
      photo: "",
      allTimeEdits: 3012730,
      editsThisWeek: 166700,
    },
    {
      name: "Andriy",
      photo: "",
      allTimeEdits: 9913250,
      editsThisWeek: 51230,
    },
    {
      name: "Ehor",
      photo: "",
      allTimeEdits: 3719850,
      editsThisWeek: 111250,
    },
    {
      name: "Oleksiy",
      photo: "",
      allTimeEdits: 3346522,
      editsThisWeek: 41000,
    },
    {
      name: "Andriy",
      photo: "",
      allTimeEdits: 2205045,
      editsThisWeek: 51630,
    },
  ]);

  const mappingData = data.map((item, index) => ({
    value: item,
    key: index,
  }));

  const sortingData = mappingData.sort(
    (a, b) => b.value.editsThisWeek - a.value.editsThisWeek
  );

  function HighestNumberForAllTimeEdit(a) {
    const getNumbers = data.map((item, index) => ({
      key: index,
      value: item.allTimeEdits,
    }));
    const SortNumbers = getNumbers.sort((a, b) => b.value - a.value);

    const HighestNumber = SortNumbers[0].value;

    function calculation() {
      const highest = (a / HighestNumber) * 100;
      return highest;
    }

    return calculation();
  }

  function HighestNumberForThisWeekEdit(a) {
    const getNumbers = data.map((item, index) => ({
      key: index,
      value: item.editsThisWeek,
    }));
    const SortNumbers = getNumbers.sort((a, b) => b.value - a.value);

    // console.log(SortNumbers);

    const HighestNumber = SortNumbers[0].value;

    function calculation() {
      const highest = (a / HighestNumber) * 100;
      return highest;
    }

    return calculation();
  }

  return (
    <div className="container">
      <div className="leaderboard index-page">
        <div className="leaderboard wrapper">
          <div className="leaderboard-header">
            <h2>Leaderboard</h2>
            <div className="leaderboard-position-types">
              <div className="leaderboard-position-type">
                <div className="leaderboard-position-dot all"></div>
                <p>All Time Edits</p>
              </div>
              <div className="leaderboard-position-type">
                <div className="leaderboard-position-dot week"></div>
                <p>Edits This Week</p>
              </div>
            </div>
          </div>
          <div className="leaderboard content">
            <div className="leaderboard scoreboard">
              {sortingData.map((item, index) => (
                <div className="leaderboard user" key={index}>
                  <div className="leaderboard photo">
                    <a>P</a>
                  </div>
                  <div className="leaderboard info">
                    <h2 className="leaderboard name">{item.value.name}</h2>
                    <div
                      style={{
                        width:
                          HighestNumberForAllTimeEdit(item.value.allTimeEdits) +
                          "%",
                      }}
                      className="leaderboard edits size"
                    >
                      <div className="leaderboard edits all"></div>
                      <div className="leaderboard edits number">
                        {item.value.allTimeEdits}
                      </div>
                    </div>
                    <div
                      style={{
                        width:
                          HighestNumberForThisWeekEdit(
                            item.value.editsThisWeek
                          ) + "%",
                      }}
                      className="leaderboard edits size"
                    >
                      <div className="leaderboard edits week"></div>
                      <div className="leaderboard edits number">
                        {item.value.editsThisWeek}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
