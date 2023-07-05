import "./Post.css";
import Comment from "./Comment.js";
import NewComment from "./NewComment.js";
import React from "react";
import Reaction from "./Reaction";
import FloatReactions from "./FloatReactions";
export default function Post({ post }) {
  const [comments, setComments] = React.useState([]);
  const [newComments, setNewComments] = React.useState([]);
  const [showAllComments, setShowAllComments] = React.useState(false);
  const [showComments, setShowComments] = React.useState(true);
  const newCommentRef = React.useRef();

  const [reactionType, setReactionType] = React.useState(0);

  const [reactions, setReactions] = React.useState(false);

  let hideReactionsTimer = false;
  let showReactionsTimer = false;

  const mouseEnterLike = () => {
    if (reactions) return;
    clearTimeout(hideReactionsTimer);
    showReactionsTimer = setTimeout(() => {
      showReactionsTimer = false;
      setReactions(true);
    }, 500);
  };
  const mouseLeaveLike = () => {
    if (!reactions) return;
    clearTimeout(showReactionsTimer);
    hideReactionsTimer = setTimeout(() => {
      setReactions(false);
    }, 500);
  };

  return (
    <>
      <div className="box post">
        <div className="post-title">
          <div className="post-title-profile">
            <svg className="profile-image profile-preview" style={{ minWidth: 40, cursor: "pointer", borderRadius: "50%" }} width="40px" height="40px">
              <mask id="jsc_c_c">
                <circle cx={20} cy={20} fill="#ffffff" r={20} />
              </mask>
              <g mask="url(#jsc_c_c)">
                <image x={0} y={0} height="100%" width="100%" xlinkHref="./images/default_profile_image.png" />
                <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={20} cy={20} r={20} strokeWidth={2} />
              </g>
            </svg>
            <div className="post-title-details">
              <div className="post-title-details-name profile-preview">Shon Tests</div>
              <div className="post-title-details-date-global">
                <div className="post-title-details-date" aria-label="Friday, November 11, 2022 at 5:49 PM">
                  November 11
                </div>
                <div className="post-title-details-separator">·</div>
                <img className="post-title-details-global" aria-label="Public" src="./images/icon_global.png" alt="" />
              </div>
            </div>
          </div>
          <div className="post-options">
            <svg fill="#65676B" viewBox="0 0 20 20" width="20px" height="20px">
              <g fillRule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
              </g>
            </svg>
          </div>
        </div>
        <div className="post-content" style={{ fontSize: post.text.length < 84 ? "1.5rem" : "0.9375rem" }}>
          {post.text}
        </div>
        <div className="post-counters">
          <div className="post-reacts">
            <div className="post-reactions">
              <Reaction reactionType={1} rotate={false} />
              <Reaction reactionType={2} rotate={false} />
              <Reaction reactionType={3} rotate={false} />
              <Reaction reactionType={4} rotate={false} />
              <Reaction reactionType={5} rotate={false} />
              <Reaction reactionType={6} rotate={false} />
              <Reaction reactionType={7} rotate={false} />
            </div>
            <div className="post-reacts-counter">4</div>
          </div>
          <div className="post-comments-counter" onClick={() => setShowComments(!showComments)} style={{ display: comments.length == 0 ? "none" : "block" }}>
            {newComments.length + comments.length} comment{comments.length + comments.length > 1 ? "s" : ""}
          </div>
        </div>
        <div className="post-buttons">
          {/* onMouseOver={(e) => window.mouseEnterLike(e.target)} onMouseLeave={() => window.mouseLeaveLike()} */}
          <div
            className="post-button post-button-like"
            onClick={(e) => {
              if (e.target.className == "post-button post-button-like" || e.target.className == "post-button-like-icon" || e.target.className == "post-button-like-text") {
                setReactionType(reactionType == 0 ? 1 : 0);
                setReactions(false);
              }
            }}
            onMouseOver={(e) => mouseEnterLike()}
            onMouseLeave={() => mouseLeaveLike()}
          >
            {reactions ? <FloatReactions setReactions={setReactions} reactionType={reactionType} setReactionType={setReactionType} /> : <></>}
            {reactionType == 0 ? <div className="post-button-like-icon" /> : <></>}
            {reactionType == 1 ? <div className="post-button-like-icon-filled reaction-rotate" /> : <></>}
            {reactionType != 1 && reactionType != 0 ? <Reaction reactionType={reactionType} rotate={true} /> : <></>}
            <div className="post-button-like-text">Like</div>
          </div>
          <div
            className="post-button post-button-comment"
            onClick={() => {
              setShowComments(true);
              setTimeout(() => newCommentRef.current.focus(), 100);
            }}
          >
            <div className="post-button-comment-icon" />
            <div className="post-button-comment-text">Comment</div>
          </div>
          <div className="post-button post-button-share">
            <div className="post-button-share-icon" />
            <div className="post-button-share-text">Share</div>
          </div>
        </div>
        {showComments ? (
          <>
            <div className="post-buttons-bottom-border" />
            <div className="post-comments">
              {/* -------------------------------------- comment -------------------------------------- */}
              <div className="show-more-comments" style={{ display: comments.length > 1 && showAllComments == false ? "block" : "none" }} onClick={() => setShowAllComments(true)}>
                {comments.length == 2 ? "View 1 more comment" : `View ${comments.length - 1} previous comments`}
              </div>
              {/* ------------------------------------------------------------------------ */}
              {showAllComments ? comments.map((comment, index) => <Comment key={index} comment={comment.props.comment} />) : comments.length != 0 ? <Comment key={comments.length - 1} comment={comments[comments.length - 1].props.comment} /> : <></>}
              {newComments.map((comment, index) => (
                <Comment key={index + comments.length} comment={comment.props.comment} />
              ))}
              {/* ------------------------------------------------------------------------- */}
            </div>
            <NewComment newComments={newComments} setNewComments={setNewComments} newCommentRef={newCommentRef} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
