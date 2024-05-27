import React from "react";

import {
  ChangeHistoryRounded,
  FacebookRounded,
  WebAssetRounded,
} from "@mui/icons-material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

export default function CardPageAdditionInfoMovie(cardData, keywordsArray) {
  return (
    <div>
      <>
        <div className="card-additional-info">
          <div className="card-additional-info-cols">
            <div className="card-additional-info-social">
              <FacebookRounded />
              <div className="plank"></div>
              <ChangeHistoryRounded />
              <div className="plank"></div>
              <WebAssetRounded />
            </div>
          </div>
          <div className="card-additional-info-cols">
            <div className="card-additional-info-col">
              <h4>status</h4>
              <div className="card-additional-info-second">
                {cardData.status}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>original language</h4>
              <div className="card-additional-info-second">
                {cardData.original_language}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>budget</h4>
              <div className="card-additional-info-second">
                ${cardData.budget}.00
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>revenue</h4>
              <div className="card-additional-info-second">
                ${cardData.revenue}.00
              </div>
            </div>
          </div>
          {cardData.keywordsArray === undefined ? (
            <div className="card-additional-info-col-no-words">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                <span className="card-additional-info-no-word">
                  No keywords have been added
                </span>
              </div>
            </div>
          ) : (
            <div className="card-additional-info-col">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                {cardData.keywordsArray.map((item) => (
                  <div className="card-additional-info-word" key={item.id}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="content-score-wrapper">
          <h4>content score</h4>
          <div className="content-score">100</div>
          <h6>yes! looking good!</h6>
        </div>

        <div className="leaderboard MTVAdditional">
          <h4>Top Contributors</h4>
          <div className="leaders">
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
          </div>
          <div className="edit-history">view edit history</div>
        </div>
      </>
    </div>
  );
}
