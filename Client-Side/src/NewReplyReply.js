import "./NewReplyReply.css";
import ReplyReply from "./ReplyReply";

export default function NewReplyReply({ newReplyReplyRef, replyReplies, setReplyReplies }) {
  const newReplyReplyHandler = (e) => {
    if (e.code == "Enter") {
      if (e.target.textContent.length == 0) {
        e.preventDefault();
      } else {
        if (e.shiftKey == false) {
          addReplyReply(e.target.innerText);
          e.target.textContent = "";
          e.preventDefault();
        }
      }
    }
  };
  const addReplyReply = (text) => {
    setReplyReplies([...replyReplies, <ReplyReply replyReply={{ text: text }} />]);
  };
  return (
    <div className="new-reply-reply">
      <svg
        className="profile-image"
        style={{
          transform: "translateY(6px)",
          minWidth: 24,
          cursor: "pointer",
          borderRadius: "50%",
        }}
        width="24px"
        height="24px"
      >
        <mask id="jsc_c_c22233">
          <circle cx={12} cy={12} fill="#ffffff" r={12} />
        </mask>
        <g mask="url(#jsc_c_c22233)">
          <image x={0} y={0} height="100%" width="100%" xlinkHref="./images/default_profile_image.png" />
          <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={12} cy={12} r={12} strokeWidth={2} />
        </g>
      </svg>
      <div className="new-comment-center">
        <div className="new-comment-reply-input" onClick={() => newReplyReplyRef.current.focus()}>
          <div className="new-comment-reply-input-content" ref={newReplyReplyRef} contentEditable="true" onKeyDown={(e) => newReplyReplyHandler(e)} />
          <div className="new-comment-input-buttons">
            <div className="new-comment-input-button" aria-label="Comment with an avatar sticker">
              <div className="new-comment-input-button-avatar-icon" />
            </div>
            <div className="new-comment-input-button" aria-label="Insert an emoji">
              <div className="new-comment-input-button-emojis-icon" />
            </div>
            <div className="new-comment-input-button" aria-label="Attach a photo or video">
              <div className="new-comment-input-button-camera-icon" />
            </div>
            <div className="new-comment-input-button" aria-label="Comment with a GIF">
              <div className="new-comment-input-button-gif-icon" />
            </div>
            <div className="new-comment-input-button" aria-label="Comment with a Sticker">
              <div className="new-comment-input-button-sticker-icon" />
            </div>
          </div>
        </div>
        <div style={{ fontSize: 12, paddingTop: 1 }}>Press Enter to post.</div>
      </div>
    </div>
  );
}
