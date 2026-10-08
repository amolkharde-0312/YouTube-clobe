import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Mixes" />
      <Button name="PlayList" />
      <Button name="Socking Music" />
      <Button name="watched" />
      <Button name="new for you" />
      <Button name="Movies" />
      <Button name="Trending" />
      <Button name="Lofi" />
      <Button name="Reverbs" />
    </div>
  );
};

export default ButtonList;
