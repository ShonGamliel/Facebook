import Comment from "./Comment";

export default function NewComment({ newComments, setNewComments, newCommentRef }) {
  const newCommentHandler = (e) => {
    if (e.code == "Enter") {
      if (e.target.textContent.length == 0) {
        e.preventDefault();
      } else {
        if (e.shiftKey == false) {
          addComment(e.target.textContent);
          e.target.textContent = "";
          e.preventDefault();
        }
      }
    }
  };

  const addComment = (text) => {
    setNewComments([...newComments, <Comment comment={{ text: text }} />]);
  };
  return (
    <div className="new-comment">
      <svg
        className="profile-image"
        style={{
          transform: "translateY(2px)",
          minWidth: 32,
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
      <div className="new-comment-center">
        <div className="new-comment-input" onClick={() => newCommentRef.current.focus()}>
          <div className="new-comment-input-content" contentEditable="true" ref={newCommentRef} onKeyDown={(e) => newCommentHandler(e)} />
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
