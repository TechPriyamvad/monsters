import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

// yeah component cards ko display karta h ko display karwata h UI pe
export const CardList = (props) => {
  // console.log(props)
  return (
    <div className="cardList">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
