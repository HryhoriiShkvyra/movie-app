import React from "react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [data, setData] = React.useState([
    {
      name: "Hryhorii",
      photo: "",
      allTimeEdit: 500,
      thisWeekEdit: 250,
    },
    {
      name: "Sergiy",
      photo: "",
      allTimeEdit: 400,
      thisWeekEdit: 200,
    },
    {
      name: "Ehor",
      photo: "",
      allTimeEdit: 350,
      thisWeekEdit: 150,
    },
    {
      name: "Oleksiy",
      photo: "",
      allTimeEdit: 300,
      thisWeekEdit: 100,
    },
    {
      name: "Andriy",
      photo: "",
      allTimeEdit: 250,
      thisWeekEdit: 50,
    },
    {
      name: "Ehor",
      photo: "",
      allTimeEdit: 350,
      thisWeekEdit: 150,
    },
    {
      name: "Oleksiy",
      photo: "",
      allTimeEdit: 300,
      thisWeekEdit: 100,
    },
    {
      name: "Andriy",
      photo: "",
      allTimeEdit: 250,
      thisWeekEdit: 50,
    },
  ]);

  function HighestNumberForAllTimeEdit(a) {
    const getNumbers = data.map((item, index) => ({
      key: index,
      value: item.allTimeEdit,
    }));
    const SortNumbers = getNumbers.sort((a, b) => b - a);

    const HighestNumber = SortNumbers[0].value;

    React.useEffect(() => {
      console.log("sortnumbers =>" + SortNumbers[0].value);
      console.log("HighestNumber ==>" + HighestNumber);
    }, []);

    function calculation() {
      const highest = (a / HighestNumber) * 100;
      return highest;
    }

    console.log(calculation());

    return calculation();
  }

  function HighestNumberForThisWeekEdit(a) {
    const getNumbers = data.map((item, index) => ({
      key: index,
      value: item.thisWeekEdit,
    }));
    const SortNumbers = getNumbers.sort((a, b) => b - a);

    const HighestNumber = SortNumbers[0].value;

    React.useEffect(() => {
      console.log("sortnumbers =>" + SortNumbers[0].value);
      console.log("HighestNumber ==>" + HighestNumber);
    }, []);

    function calculation() {
      const highest = (a / HighestNumber) * 100;
      return highest;
    }

    console.log(calculation());

    return calculation();
  }

  return (
    <div className="container">
      <div className="leaderboard index-page">
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
        <div className="leaderboard scoreboard">
          {data.map((item, index) => (
            <div className="leaderboard user" key={index}>
              <div className="leaderboard photo">
                <a>P</a>
              </div>
              <div className="leaderboard info">
                <h2 className="leaderboard name">{item.name}</h2>
                <div
                  style={{
                    width: HighestNumberForAllTimeEdit(item.allTimeEdit) + "%",
                  }}
                  className="leaderboard edits size"
                >
                  <div className="leaderboard edits all"></div>
                  <div className="leaderboard edits number">
                    {item.allTimeEdit}
                  </div>
                </div>
                <div
                  style={{
                    width:
                      HighestNumberForThisWeekEdit(item.thisWeekEdit) + "%",
                  }}
                  className="leaderboard edits size"
                >
                  <div className="leaderboard edits week"></div>
                  <div className="leaderboard edits number">
                    {item.thisweekEdit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
