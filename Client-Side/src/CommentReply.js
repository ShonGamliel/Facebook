import React from "react";
import FloatReactions from "./FloatReactions";
import ReplyReply from "./ReplyReply";
import NewReplyReply from "./NewReplyReply";

export default function CommentReply({ reply, newReplyRef, setCommentBackground }) {
  const [replyBackground, setReplyBackground] = React.useState("#f0f2f5");
  const [replyReplyButton, setReplyReplyButton] = React.useState(false);
  let newReplyReplyRef = React.useRef();
  const [replyReplies, setReplyReplies] = React.useState([]);
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
    if (replyReplies.length != 0) {
      setReplyReplyButton(true);
    }
  }, []);
  return (
    <div className="reply-container">
      {replyReplyButton ? <div className="reply-vertical-line"></div> : <></>}
      <div className="reply-line"></div>
      <div className="reply">
        <svg
          className="profile-image profile-preview"
          style={{
            transform: "translateY(4px)",
            minWidth: 24,
            cursor: "pointer",
            borderRadius: "50%",
          }}
          width="24px"
          height="24px"
        >
          <mask id="jsc_c_c222333">
            <circle cx={12} cy={12} fill="#ffffff" r={12} />
          </mask>
          <g mask="url(#jsc_c_c222333)">
            <image x={0} y={0} height="100%" width="100%" xlinkHref="./images/default_profile_image.png" />
            <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={12} cy={12} r={12} strokeWidth={2} />
          </g>
        </svg>
        <div className="comment-center">
          <div className="reply-content" style={{ backgroundColor: replyBackground }}>
            <div className="commenter-name profile-preview">Shon Tests</div>
            <div className="comment-content-text">{reply.text}</div>
          </div>
        </div>
        <div className="reply-options" aria-label="Edit or delete this">
          <div className="comment-options-icon" />
        </div>
      </div>
      <div className="reply-buttons">
        <div className="reply-button-like" onMouseOver={(e) => mouseEnterLike()} onMouseLeave={() => mouseLeaveLike()}>
          {reactions ? <FloatReactions /> : <></>}
          Like
        </div>
        <div
          className="reply-button-reply"
          onClick={() => {
            setReplyReplyButton(true);
            setCommentBackground("#E7F3FF");
            setTimeout(() => newReplyReplyRef.current.focus(), 100);
            setTimeout(() => setCommentBackground("#f0f2f5"), 3000);
          }}
        >
          Reply
        </div>
        <div className="reply-button-time" aria-label="Friday, November 11, 2022 at 5:49 PM">
          2h
        </div>
      </div>
      <div className="comment-replies">
        {replyReplies.map((reply, index) => (
          <ReplyReply key={index} replyReply={reply.props.replyReply} setReplyBackground={setReplyBackground} newReplyReplyRef={newReplyReplyRef} />
        ))}
      </div>
      {replyReplyButton == true || replyReplies.length != 0 ? <NewReplyReply replyReplies={replyReplies} setReplyReplies={setReplyReplies} newReplyReplyRef={newReplyReplyRef} /> : <></>}
    </div>
  );
}
