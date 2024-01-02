import React from "react";
import "./MovieWrapper.css";
import Sort from "../Filters/Sort/Sort";
import WhereToWatch from "../Filters/Where to watch/WhereToWatch";
import Filters from "../Filters/Filters/Filters";
import Card from "../Card/Card";

// export default function MovieWrapper(pageState) {
export default function MovieWrapper({ currentLocation }) {
  // const pageValue = pageState.pageState.pageState;

  // console.log(pageValue);
  // console.log(pageState.pageState);
  console.log(currentLocation);

  // const MovieWrapperLogic = () => {
  //   if (pageState.pageState === "Popular") {
  //     return (
  //       <div>
  //         <div className="container">
  //           <div className="content">
  //             <div>
  //               <div className="title">
  //                 <h2>{pageState.pageState} Movies</h2>
  //               </div>
  //               <div className="content"></div>
  //               <div className="filters">
  //                 <Sort />
  //                 <WhereToWatch />
  //                 <Filters pageValue={pageState.pageState} />
  //               </div>
  //             </div>

  //             <div className="items">
  //               <Card pageValue={pageState.pageState} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else if (pageState.pageState === "Now Playing") {
  //     return (
  //       <div>
  //         <div>
  //           <div className="container">
  //             <div className="content">
  //               <div>
  //                 <div className="title">
  //                   <h2>{pageState.pageState} Movies</h2>
  //                 </div>
  //                 <div className="content"></div>
  //                 <div className="filters">
  //                   <Sort />
  //                   <WhereToWatch />
  //                   <Filters pageValue={pageState.pageState} />
  //                 </div>
  //               </div>

  //               <div className="items">
  //                 <Card pageValue={pageState.pageState} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else if (pageState.pageState === "Upcoming") {
  //     return (
  //       <div>
  //         <div>
  //           <div>
  //             <div className="container">
  //               <div className="content">
  //                 <div>
  //                   <div className="title">
  //                     <h2>{pageState.pageState} Movies</h2>
  //                   </div>
  //                   <div className="content"></div>
  //                   <div className="filters">
  //                     <Sort />
  //                     <WhereToWatch />
  //                     <Filters pageValue={pageState.pageState} />
  //                   </div>
  //                 </div>

  //                 <div className="items">
  //                   <Card pageValue={pageState.pageState} />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         );
  //       </div>
  //     );
  //   } else if (pageState.pageState === "Top Rated") {
  //     return (
  //       <div>
  //         <div>
  //           <div>
  //             <div className="container">
  //               <div className="content">
  //                 <div>
  //                   <div className="title">
  //                     <h2>{pageState.pageState} Movies</h2>
  //                   </div>
  //                   <div className="content"></div>
  //                   <div className="filters">
  //                     <Sort />
  //                     <WhereToWatch />
  //                     <Filters pageValue={pageState.pageState} />
  //                   </div>
  //                 </div>

  //                 <div className="items">
  //                   <Card pageValue={pageState.pageState} />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         );
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className="container">
  //       <div className="content">
  //         <div>
  //           <div className="title">
  //             <h2>Popular Movies</h2>
  //           </div>
  //           <div className="content"></div>
  //           <div className="filters">
  //             <Sort />
  //             <WhereToWatch />
  //             <Filters pageValue={pageState.pageState} />
  //           </div>
  //         </div>

  //         <div className="items">
  //           <Card />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="movie">
      {/* <MovieWrapperLogic /> */}

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
