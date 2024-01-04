import React from "react";
import "./MovieWrapper.css";
import Sort from "../Filters/Sort/Sort";
import WhereToWatch from "../Filters/Where to watch/WhereToWatch";
import Filters from "../Filters/Filters/Filters";
import Card from "../Card/Card";

export default function MovieWrapper(pageState) {
  // export default function MovieWrapper({ currentLocation }) {
  const pageValue = pageState.pageState;

  // console.log(pageValue);
  // console.log(pageState.pageState);
  // console.log(currentLocation);

  const MovieWrapperLogic = () => {
    if (pageValue === "Popular Movies") {
      return (
        <div>
          <div className="container">
            <div className="content">
              <div>
                <div className="title">
                  <h2>{pageValue}</h2>
                </div>
                <div className="content"></div>
                <div className="filters">
                  <Sort />
                  <WhereToWatch />
                  <Filters pageValue={pageValue} />
                </div>
              </div>

              <div className="items">
                <Card pageValue={pageValue} />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "Now Playing Movies") {
      return (
        <div>
          <div>
            <div className="container">
              <div className="content">
                <div>
                  <div className="title">
                    <h2>{pageValue}</h2>
                  </div>
                  <div className="content"></div>
                  <div className="filters">
                    <Sort />
                    <WhereToWatch />
                    <Filters pageValue={pageValue} />
                  </div>
                </div>

                <div className="items">
                  <Card pageValue={pageValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "Upcoming Movies") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue}</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>

                  <div className="items">
                    <Card pageValue={pageValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        </div>
      );
    } else if (pageValue === "Top Rated") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue}</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>

                  <div className="items">
                    <Card pageValue={pageValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        </div>
      );
    } else if (pageValue === "Popular TV Shows") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue}</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>
                  <div className="items">
                    <Card pageValue={pageValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "TV Shows Airing Today") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue}</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>
                  <div className="items">
                    <Card pageValue={pageValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "Currently Airing TV Shows") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue}</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>
                  <div className="items">
                    <Card pageValue={pageValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "Top Rated TV Shows") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue}</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>
                  <div className="items">
                    <Card pageValue={pageValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // return (
    //   <div className="container">
    //     <div className="content">
    //       <div>
    //         <div className="title">
    //           <h2>Popular Movies</h2>
    //         </div>
    //         <div className="content"></div>
    //         <div className="filters">
    //           <Sort />
    //           <WhereToWatch />
    //           <Filters pageValue={pageState.pageState} />
    //         </div>
    //       </div>

    //       <div className="items">
    //         <Card />
    //       </div>
    //     </div>
    //   </div>
    // );
  };

  return (
    <div className="movie">
      <MovieWrapperLogic />

      {/* {data.map((item) => (
        <div key={item.id}>
          <div onClick={(e) => handleClick()}>{item.id}</div>
          <div className={item.state === false ? "display" : "hidden"}>
            hehe
          </div>
        </div>
      ))} */}
    </div>
  );
}
