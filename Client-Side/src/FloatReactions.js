import "./FloatReactions.css";
import React from "react";
export default function FloatReactions({ setReactions, reactionType, setReactionType }) {
  return (
    <div id="float-reactions">
      <video
        autoPlay
        loop
        preload="metadata"
        muted
        className="reaction-button"
        onClick={() => {
          setReactionType(reactionType == 1 ? 0 : 1);
          setReactions(false);
        }}
      >
        <source src="./images/likereactionvideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        preload="metadata"
        muted
        className="reaction-button"
        onClick={() => {
          setReactionType(reactionType == 2 ? 0 : 2);
          setReactions(false);
        }}
      >
        <source src="./images/lovereactionvideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        preload="metadata"
        muted
        className="reaction-button"
        onClick={() => {
          setReactionType(reactionType == 3 ? 0 : 3);
          setReactions(false);
        }}
      >
        <source src="./images/carereactionvideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        preload="metadata"
        muted
        className="reaction-button"
        onClick={() => {
          setReactionType(reactionType == 4 ? 0 : 4);
          setReactions(false);
        }}
      >
        <source src="./images/hahareactionvideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        preload="metadata"
        muted
        className="reaction-button"
        onClick={() => {
          setReactionType(reactionType == 5 ? 0 : 5);
          setReactions(false);
        }}
      >
        <source src="./images/wowreactionvideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        preload="metadata"
        className="sad-reaction reaction-button"
        onClick={() => {
          setReactionType(reactionType == 6 ? 0 : 6);
          setReactions(false);
        }}
      >
        <source src="./images/sadreactionvideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        className="reaction-button"
        onClick={() => {
          setReactionType(reactionType == 7 ? 0 : 7);
          setReactions(false);
        }}
      >
        <source src="./images/angryreactionvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
