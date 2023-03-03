import React, { useState } from "react";
import style from "./DetailPlan.module.css";
import EmojiPicker from "emoji-picker-react";

export default function PostComment(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emoji) => {
    setText((text) => text + emoji?.emoji?.toString());
    setShowPicker(false);
  };

  return (
    <div>
      <div>
        <img className={style.imgComment} src={user.image} alt="" />
        <label>{props.label}</label>
        <textarea
          className={style.text}
          style={{ resize: "none", borderRadius: "5px" }}
          placeholder={props.placeholder}
          name="reseña"
          id="reseña"
          cols="70"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {showPicker && (
          <div className={style.emojiPicker}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
      <div className={style.buttonCommentDiv}>
        <button
          className={style.submitBtn}
          onClick={() => setShowPicker(!showPicker)}
        >
          Add Emoji
        </button>
        <button
          className={style.submitBtn}
          onClick={props.handleClick}
        >
          Dejar reseña
        </button>
      </div>
    </div>
  );
}
