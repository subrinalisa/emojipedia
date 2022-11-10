import React from "react";
import Card from "./Card";
import emojiData from "../dataset";

const renderEmoji = (data) => {
  return (
    <Card key={data.id} name={data.name} icon={data.icon} des={data.des} />
  );
};
const App = (props) => {
  return (
    <div class="emojipedia mt-5">
      <div class="container">
        <h1>EmojiPedia</h1>
        <div class="row">{emojiData.map(renderEmoji)}</div>
      </div>
    </div>
  );
};
export default App;
