import React, { useRef } from "react";
import Dawn from "../../assets/themes/Dawn.png";
import Refresh from "../../assets/themes/Refresh.png";
import Craft from "../../assets/themes/Craft.png";
import "./choose-theme.scss";

const ChooseTheme = props => {
    const cardListRef = useRef(undefined);
    const cardList = [Dawn, Refresh, Craft];

    const handleClassChange = index => {
        for (let i = 0; i < cardList.length; i++) {
            if (index === i) {
                cardListRef.current.children[i].classList.value =
                    "card highlight";
            } else {
                cardListRef.current.children[i].classList.value = "card";
            }
        }
    };

    return (
        <div className="card-list" ref={cardListRef}>
            {cardList.map((card, i) => {
                const name = card.split("/")[3].split(".")[0];
                return (
                    <div
                        key={i}
                        className="card"
                        name={name}
                        onClick={e => {
                            props.handleStepValueChange(name);
                            handleClassChange(i);
                        }}
                    >
                        <div className="card__img">
                            <img src={card} alt={name} name={name} />
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
