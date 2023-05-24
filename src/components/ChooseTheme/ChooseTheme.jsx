import React from "react";
import Dawn from "../../assets/themes/Dawn.png";
import Refresh from "../../assets/themes/Refresh.png";
import Craft from "../../assets/themes/Craft.png";
import "./choose-theme.scss";

const ChooseTheme = props => {
    const cardList = [Dawn, Refresh, Craft];
    return (
        <div className="card-list">
            {cardList.map((card, i) => {
                const name = card.split("/")[3].split(".")[0];
                return (
                    <div
                        key={i}
                        className="card"
                        onClick={() => props.handleStepValueChange(name)}
                    >
                        <div className="card__img">
                            <img src={card} />
                        </div>
                        <div className="card__title">
                            <span>{name}</span>
                            <span>By Shopify</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChooseTheme;
