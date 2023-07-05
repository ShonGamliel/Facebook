import CommentReply from "./CommentReply";
import NewCommentReply from "./NewCommentReply";
import LikeReact from "./LikeReact";
import LoveReact from "./LoveReact";
import CareReact from "./CareReact";
import HahaReact from "./HahaReact";
import WowReact from "./WowReact";
import SadReact from "./SadReact";
import AngryReact from "./AngryReact";
import React from "react";
import FloatReactions from "./FloatReactions";
export default function Comment({ comment }) {
  let commentElement = React.useRef();
  const [replies, setReplies] = React.useState([]);
  const [commentReplyButton, setCommentReplyButton] = React.useState(false);
  const [commentBackground, setCommentBackground] = React.useState("#f0f2f5");
  const newReplyRef = React.useRef();
  const [commentClassName, setCommentClassName] = React.useState("comment-reactions");

  const [reactions, setReactions] = React.useState(false);
  let hideReactionsTimer = false;
  let showReactionsTimer = false;

  const mouseEnterLike = () => {
    clearTimeout(hideReactionsTimer);
    showReactionsTimer = setTimeout(() => {
      showReactionsTimer = false;
      setReactions(true);
    }, 500);
  };
  const mouseLeaveLike = () => {
    clearTimeout(showReactionsTimer);
    hideReactionsTimer = setTimeout(() => {
      setReactions(false);
    }, 500);
  };

  React.useEffect(() => {
    if (replies.length != 0) {
      setCommentReplyButton(true);
    }
    setCommentClassName(commentElement.current.getBoundingClientRect().right - commentElement.current.getBoundingClientRect().left > 270 ? "comment-reactions-long" : "comment-reactions");
  }, []);
  return (
    <>
      <div className="comment-container">
        {commentReplyButton ? <div className="comment-line"></div> : <></>}
        <div className="comment">
          <svg
            className="profile-image profile-preview"
            style={{
              transform: "translateY(-1px)",
              minWidth: "32px",
              minHeight: "32px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
            width="32px"
            height="32px"
          >
            <mask id="jsc_c_c222">
              <circle cx={16} cy={16} fill="#ffffff" r={16} />
            </mask>
            <g mask="url(#jsc_c_c222)">
              <image x={0} y={0} height="100%" width="100%" xlinkHref="./images/default_profile_image.png" />
              <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={16} cy={16} r={16} strokeWidth={2} />
            </g>
          </svg>
          <div className="comment-center">
            <div className={commentClassName}>
              <div className="comment-reacts">
                <div className="comment-reactions-counter">2.4K</div>
                <AngryReact />
                <SadReact />
                <WowReact />
                <HahaReact />
                <CareReact />
                <LoveReact />
                <LikeReact />
              </div>
            </div>

            <div className="comment-content" ref={commentElement} style={{ backgroundColor: commentBackground }}>
              <div className="commenter-name profile-preview">Shon Tests</div>
              <div className="comment-content-text">{comment.text}</div>
            </div>
          </div>
          <div className="comment-options" aria-label="Edit or delete this">
            <div className="comment-options-icon" />
          </div>
        </div>

        <div className="comment-buttons">
          <div className="comment-button-like" onMouseOver={(e) => mouseEnterLike()} onMouseLeave={() => mouseLeaveLike()}>
            {reactions ? <FloatReactions /> : <></>}
            Like
          </div>
          <div
            className="comment-button-reply"
            onClick={() => {
              setCommentReplyButton(true);
              setTimeout(() => newReplyRef.current.focus(), 100);
              setCommentBackground("#E7F3FF");
              setTimeout(() => setCommentBackground("#f0f2f5"), 3000);
            }}
          >
            Reply
          </div>
          <div className="comment-button-time" aria-label="Friday, November 11, 2022 at 5:49 PM">
            2h
          </div>
        </div>
        {/* ---------------------------------------------- REPLY ----------------------------------------------- */}
        <div className="comment-replies">
          {replies.map((reply, index) => (
            <CommentReply key={index} reply={reply.props.reply} newReplyRef={newReplyRef} setCommentBackground={setCommentBackground} />
          ))}
        </div>
        {/* -----------------------------------------------NEW REPLY ----------------------------------------------- */}
        {commentReplyButton == true || replies.length != 0 ? <NewCommentReply replies={replies} setReplies={setReplies} newReplyRef={newReplyRef} /> : <></>}
      </div>
    </>
  );
}
