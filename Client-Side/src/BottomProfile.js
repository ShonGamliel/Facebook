import "./BottomProfile.css";
import Post from "./Post";
import CreatePost from "./CreatePost";
import React from "react";
import { getElementPosition, getElementHeight } from "./globalFunctions";

const post = {
  text: "Post number 1 test",
  user: {
    userid: 1,
    username: "Shon Gamliel",
    profileImage: "./images/default_profile_image.png",
  },
  comments: [
    {
      commentid: 1,
      userid: 1,
      username: "Shon Gamliel",
      profileImage: "./images/default_profile_image.png",
      text: "comment number 1",
      replies: [
        {
          replyid: 1,
          userid: 1,
          username: "Shon Gamliel",
          profileImage: "./images/default_profile_image.png",
          text: "reply number 1",
          subreplies: [
            {
              subreplyid: 1,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 1",
            },
            {
              subreplyid: 2,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 2",
            },
          ],
        },
        {
          replyid: 2,
          userid: 1,
          username: "Shon Gamliel",
          profileImage: "./images/default_profile_image.png",
          text: "reply number 2",
          subreplies: [
            {
              subreplyid: 1,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 1",
            },
            {
              subreplyid: 2,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 2",
            },
          ],
        },
      ],
    },
    {
      commentid: 2,
      userid: 1,
      username: "Shon Gamliel",
      profileImage: "./images/default_profile_image.png",
      text: "comment number 2",
      replies: [
        {
          replyid: 1,
          userid: 1,
          username: "Shon Gamliel",
          profileImage: "./images/default_profile_image.png",
          text: "reply number 1",
          subreplies: [
            {
              subreplyid: 1,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 1",
            },
            {
              subreplyid: 2,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 2",
            },
          ],
        },
        {
          replyid: 2,
          userid: 1,
          username: "Shon Gamliel",
          profileImage: "./images/default_profile_image.png",
          text: "reply number 2",
          subreplies: [
            {
              subreplyid: 1,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 1",
            },
            {
              subreplyid: 2,
              userid: 1,
              username: "Shon Gamliel",
              profileImage: "./images/default_profile_image.png",
              text: "subreply number 2",
            },
          ],
        },
      ],
    },
  ],
};

export default function BottomProfile() {
  const [posts, setPosts] = React.useState([<Post post={post} />]);
  const [showCreatePost, setShowCreatePost] = React.useState(false);
  React.useEffect(() => {
    let profileStickyInfo = document.getElementById("profile-bottom-info");
    let startBottomPosition = getElementPosition(profileStickyInfo).bottom;
    let topgap = 60 + 56 + 16;
    let bottomgap = 16;
    const profileStickyContainer = (e) => {
      if (window.innerWidth > 925) {
        let startPosition = document.getElementById("profile-bottom-posts").getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + topgap < startPosition) {
          profileStickyInfo.style.transform = "none";
        } else {
          if (getElementHeight(profileStickyInfo) < window.innerHeight - topgap) {
            if (window.scrollY > startPosition - topgap) {
              profileStickyInfo.style.transform = `translateY(${window.scrollY + topgap - startPosition}px)`;
            } else {
              profileStickyInfo.style.transform = "none";
            }
          } else {
            if (window.scrollY + window.innerHeight - bottomgap > getElementPosition(profileStickyInfo).bottom) {
              profileStickyInfo.style.transform = `translateY(${window.scrollY + window.innerHeight - startBottomPosition - bottomgap}px)`;
            }
            if (window.scrollY + topgap < getElementPosition(profileStickyInfo).top) {
              profileStickyInfo.style.transform = `translateY(${window.scrollY + topgap - startPosition}px)`;
            }
          }
        }
      } else {
        profileStickyInfo.style.transform = "none";
      }
    };

    window.addEventListener("scroll", profileStickyContainer);
    return () => {
      window.removeEventListener("scroll", profileStickyContainer);
    };
  }, []);
  return (
    <div id="profile">
      <div id="profile-bottom">
        <div id="profile-bottom-info">
          <div id="profile-bottom-info-intro" className="box">
            <div className="box-title">
              <div className="box-title-text">Intro</div>
            </div>
            <div id="profile-bottom-info-intro-buttons">
              <div className="btn profile-bottom-info-intro-button" id="add-bio-button">
                Add bio
              </div>
              <div className="btn profile-bottom-info-intro-button" id="edit-details-button">
                Edit details
              </div>
              <div style={{ marginTop: "1.5px" }} className="btn profile-bottom-info-intro-button" id="add-hobbies-button">
                Add hobbies
              </div>
              <div style={{ marginTop: "0.5px" }} className="btn profile-bottom-info-intro-button" id="add-featured-button">
                Add featured
              </div>
            </div>
          </div>
          <div id="profile-bottom-info-photos" className="box">
            <div className="box-title">
              <div style={{ margin: "0 8px 0 8px" }} className="box-title-text">
                Photos
              </div>
              <div id="profile-bottom-info-photos-button">
                <div id="profile-bottom-info-photos-button-text">See all photos</div>
              </div>
            </div>
          </div>
          <div id="profile-bottom-info-friends" className="box">
            <div className="box-title">
              <div style={{ margin: "0 8px 0 8px" }} className="box-title-text">
                Friends
              </div>
              <div id="profile-bottom-info-friends-button">
                <div id="profile-bottom-info-friends-button-text">See all friends</div>
              </div>
            </div>
          </div>
          <div id="profile-credits">
            <div className="credit-link">Privacy</div>
            <div className="credit-gap">·</div>
            <div className="credit-link">Terms</div>
            <div className="credit-gap">·</div>
            <div className="credit-link">Advertising</div>
            <div className="credit-gap">·</div>
            <div className="credit-link">
              Ad Choises
              <span
                style={{
                  backgroundImage: 'url("./images/icons3.png")',
                  backgroundPosition: "-176px -116px",
                  backgroundSize: "190px 204px",
                  width: 12,
                  height: 12,
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  filter: "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
                }}
              />
            </div>
            <div className="credit-gap">·</div>
            <div className="credit-link">Cookies</div>
            <div className="credit-gap">·</div>
            <div className="credit-link">More</div>
            <div className="credit-gap">·</div>
            <div
              style={{
                lineHeight: "1.2308",
                fontWeight: 400,
                fontSize: "0.8125rem",
                color: "#65676b",
              }}
            >
              Meta ©
            </div>
            <div
              style={{
                lineHeight: "1.2308",
                fontWeight: 400,
                fontSize: "0.8125rem",
                color: "#65676b",
              }}
            >
              2022
            </div>
          </div>
        </div>
        <div id="profile-bottom-posts">
          <div id="profile-bottom-posts-create" className="box">
            <div id="profile-bottom-posts-create-top">
              <svg className="profile-image" style={{ minWidth: 40, cursor: "pointer", borderRadius: "50%" }} width="40px" height="40px">
                <mask id="jsc_c_c">
                  <circle cx={20} cy={20} fill="#ffffff" r={20} />
                </mask>
                <g mask="url(#jsc_c_c)">
                  <image x={0} y={0} height="100%" width="100%" xlinkHref="./images/default_profile_image.png" />
                  <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={20} cy={20} r={20} strokeWidth={2} />
                </g>
              </svg>
              <div
                id="profile-bottom-posts-create-top-field"
                onClick={() => {
                  setShowCreatePost(true);
                  document.body.style.overflowY = "hidden";
                }}
              >
                What's on your mind?
              </div>
              {showCreatePost ? <CreatePost posts={posts} setPosts={setPosts} setShowCreatePost={setShowCreatePost} /> : <></>}
            </div>
            <div id="profile-bottom-posts-create-bottom">
              <div className="profile-bottom-posts-create-bottom-button" id="profile-bottom-posts-create-bottom-button-live">
                <div id="profile-bottom-posts-create-bottom-button-live-icon" />
                <div className="profile-bottom-posts-create-bottom-button-text">Live video</div>
              </div>
              <div className="profile-bottom-posts-create-bottom-button" id="profile-bottom-posts-create-bottom-button-gallery">
                <div id="profile-bottom-posts-create-bottom-button-gallery-icon" />
                <div className="profile-bottom-posts-create-bottom-button-text">Photo/video</div>
              </div>
              <div className="profile-bottom-posts-create-bottom-button" id="profile-bottom-posts-create-bottom-button-event">
                <div id="profile-bottom-posts-create-bottom-button-event-icon" />
                <div className="profile-bottom-posts-create-bottom-button-text">Life event</div>
              </div>
            </div>
          </div>
          <div id="profile-bottom-posts-view" className="box">
            <div id="profile-bottom-posts-view-title" className="box-title">
              <div className="box-title-text">Posts</div>
              <div id="profile-bottom-posts-view-buttons">
                <div className="profile-bottom-posts-view-button btn" id="profile-bottom-posts-view-button-filters">
                  <div id="profile-bottom-posts-view-button-filters-icon" />
                  <div className="profile-bottom-posts-view-button-text">Filters</div>
                </div>
                <div className="profile-bottom-posts-view-button btn" id="profile-bottom-posts-view-button-manage">
                  <div id="profile-bottom-posts-view-button-manage-icon" />
                  <div className="profile-bottom-posts-view-button-text">Manage posts</div>
                </div>
              </div>
            </div>
            <div id="profile-bottom-posts-view-separator" />
            <div id="profile-bottom-posts-view-bottom">
              <div className="profile-bottom-posts-view-bottom-button profile-bottom-posts-view-bottom-button-focus" id="profile-bottom-posts-view-bottom-button-list">
                <div className="profile-bottom-posts-view-bottom-button-icon" id="profile-bottom-posts-view-bottom-button-list-icon" />
                <div className="profile-bottom-posts-view-bottom-button-text">List view</div>
              </div>
              <div className="profile-bottom-posts-view-bottom-button" id="profile-bottom-posts-view-bottom-button-grid">
                <div className="profile-bottom-posts-view-bottom-button-icon" id="profile-bottom-posts-view-bottom-button-grid-icon" />
                <div className="profile-bottom-posts-view-bottom-button-text">Grid view</div>
              </div>
            </div>
          </div>
          <div id="posts">
            {posts.map((post, index) => (
              <Post post={post.props.post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
