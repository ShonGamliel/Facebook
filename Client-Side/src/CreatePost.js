import React from "react";
import Post from "./Post";
export default function CreatePost({ posts, setPosts, setShowCreatePost }) {
  let postContentRef = React.useRef();
  let newPostBackgroundRef = React.useRef();

  const closeCreatePost = () => {
    postContentRef.current.innerText = "";
    document.body.style.overflowY = "visible";
    setShowCreatePost(false);
  };

  const newPost = () => {
    if (postContentRef.current.innerText.length != 0) {
      setPosts([...posts, <Post post={{ text: postContentRef.current.innerText }} />]);
      closeCreatePost();
    }
  };
  return (
    <div
      id="new-post-background"
      ref={newPostBackgroundRef}
      onClick={(e) => {
        if (e.target == newPostBackgroundRef.current) {
          closeCreatePost();
        }
      }}
    >
      <div id="new-post-box">
        <div id="new-post-box-title">
          Create Post
          <div id="new-post-box-close-button" onClick={() => closeCreatePost()}>
            <div id="new-post-box-close" />
          </div>
        </div>
        <div id="new-post-box-center">
          <div id="new-post-box-profile">
            <svg
              style={{
                minWidth: 40,
                borderRadius: "50%",
                transform: "translateY(1px)",
              }}
              width="40px"
              height="40px"
            >
              <mask id="jsc_c_c">
                <circle cx={20} cy={20} fill="#ffffff" r={20} />
              </mask>
              <g mask="url(#jsc_c_c)">
                <image x={0} y={0} height="100%" width="100%" xlinkHref="./images/default_profile_image.png" />
                <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={20} cy={20} r={20} strokeWidth={2} />
              </g>
            </svg>
            <div id="new-post-box-right">
              <div id="new-post-box-profile-name">Shon Tests</div>
              <div id="new-post-box-global">
                <img id="new-post-box-global-icon" src="./images/icon_global.png" alt="" />
                <div id="new-post-box-global-text">Public</div>
                <div id="new-post-box-global-arrow" />
              </div>
            </div>
          </div>
          <div id="new-post-box-overflow" onClick={() => postContentRef.current.focus()}>
            <div id="new-post-box-content" ref={postContentRef} contentEditable="true" onChange={(e) => (e.target.innerHTML.length > 84 ? (e.target.style.fontSize = "15px") : (e.target.style.fontSize = "24px"))} />
            <div id="new-post-box-overflow-buttons">
              <img id="new-post-box-overflow-aa" src="./images/new_post_aa.png" alt="" />
              <div id="new-post-box-overflow-emoji" aria-label="Emoji" />
            </div>
          </div>
          <div id="new-post-box-bottom">
            <div id="add-to-post">
              <div
                style={{
                  width: "100%",
                  fontSize: "0.9375rem",
                  wordBreak: "break-word",
                  fontWeight: 600,
                  wordWrap: "break-word",
                  transform: "translateY(-2px)",
                }}
              >
                Add to your post
              </div>
              <div id="add-to-post-buttons">
                <div
                  aria-label="Photo/Video"
                  className="add-to-post-button"
                  style={{
                    height: 24,
                    width: 24,
                    backgroundImage: 'url("./images/icons4.png")',
                    backgroundPosition: "0px -216px",
                    backgroundSize: "34px 616px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div
                  aria-label="Tag people"
                  className="add-to-post-button"
                  style={{
                    height: 24,
                    width: 24,
                    backgroundImage: 'url("./images/icons4.png")',
                    backgroundPosition: "0px -190px",
                    backgroundSize: "34px 616px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div
                  aria-label="Feeling/activity"
                  className="add-to-post-button"
                  style={{
                    height: 24,
                    width: 24,
                    backgroundImage: 'url("./images/icons4.png")',
                    backgroundPosition: "0px -164px",
                    backgroundSize: "34px 616px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div
                  aria-label="Check in"
                  className="add-to-post-button"
                  style={{
                    height: 24,
                    width: 24,
                    backgroundImage: 'url("./images/icons5.png")',
                    backgroundPosition: "0px -52px",
                    backgroundSize: "26px 78px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div
                  aria-label="Life event"
                  className="add-to-post-button"
                  style={{
                    height: 24,
                    width: 24,
                    backgroundImage: 'url("./images/icons6.png")',
                    backgroundPosition: "0px 0px",
                    backgroundSize: "26px 52px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div
                  aria-label="More"
                  className="add-to-post-button"
                  style={{
                    height: 24,
                    width: 24,
                    backgroundImage: 'url("./images/icons4.png")',
                    backgroundPosition: "0px -86px",
                    backgroundSize: "34px 616px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
              </div>
            </div>
            <div id="submit-post-button" onClick={() => newPost()}>
              Post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
