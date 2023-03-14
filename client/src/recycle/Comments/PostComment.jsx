import React, { useState } from "react";
import emojiIcon from "../../assets/emoji.svg";
import style from "./Comments.module.css";
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
    <div className={style.container}>
      <div className={style.postComment}>
        <img
          className={style.imgComment}
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          title={`${user.firstName} ${user.lastName}`}
          loading="lazy"
        />
        <textarea
          className={style.inputComment}
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
      <div className={style.postButtons}>
        <button
          className={style.emojiBtn}
          onClick={() => setShowPicker(!showPicker)}
        >
          <img
            src={emojiIcon}
            alt="Emoji icon"
            title="Emoji icon"
            height="15px"
            loading="lazy"
          />
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
