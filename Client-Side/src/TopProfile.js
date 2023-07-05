import "./TopProfile.css";
export default function TopProfile() {
  return (
    <>
      <div id="profile-top">
        <div id="profile-top-top">
          {/* =========================== No Subject Image =============================== */}
          <div id="profile-top-top-no-subject">
            <div id="profile-top-top-no-subject-bottom">
              <div id="profile-top-top-no-subject-bottom-add-subject-button">
                <div id="profile-top-top-no-subject-bottom-add-subject-button-icon" className="icon" />
                <div id="profile-top-top-no-subject-bottom-add-subject-button-text">Add cover photo</div>
              </div>
            </div>
          </div>
          {/* ============================================================================ */}
          {/* ============================ With Subject Image ============================ */}
          {/* <div id="profile-top-top-with-subject">
            <div id="profile-top-top-with-subject-image-container">
              <img
                id="profile-top-top-with-subject-image"
                src="https://scontent.ftlv19-1.fna.fbcdn.net/v/t1.6435-9/140028873_10221477816709122_4646991097940033158_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2tGD2BOYZnoAX-fr2HG&_nc_ht=scontent.ftlv19-1.fna&oh=00_AfDlfQn7RP6RQevF3QkIMRV6TMfDjoHAUAc7UzDmKhId7Q&oe=63D1FC75"
                alt=""
              />
            </div>
          </div> */}
          {/* ============================================================================ */}
        </div>
        <div id="profile-top-center">
          <div id="profile-top-center-image" className="center">
            <svg style={{ height: 168, width: 168, zIndex: 20 }}>
              <mask id="jsc_c_1a">
                <circle cx={84} cy={84} fill="white" r={84} />
              </mask>
              <g mask="url(#jsc_c_1a)">
                <image style={{ height: 168, width: 168 }} x={0} y={0} height="100%" width="100%" xlinkHref="../images/default_profile_image.png" />
                <circle fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth={2} cx={84} cy={84} r={84} />
              </g>
            </svg>
            <div id="profile-top-center-image-button">
              <div id="profile-top-center-image-button-icon" />
            </div>
          </div>
          <div id="profile-top-center-center">
            <div id="profile-top-center-name">Shon Tests</div>
            <div id="profile-top-center-friends">1 friend</div>
          </div>
          <div id="profile-top-center-buttons">
            <div id="profile-top-center-button-add-to-story">
              <img id="profile-top-center-button-add-to-story-icon" src="../images/icon_add_to_story.png" alt="" height={16} width={16} />
              <div id="profile-top-center-button-add-to-story-text">Add to story</div>
            </div>
            <div id="profile-top-center-button-edit-profile">
              <img id="profile-top-center-button-edit-profile-icon" src="../images/icon_edit_profile.png" alt="" height={16} width={16} />
              <div id="profile-top-center-button-edit-profile-text">Edit profile</div>
            </div>
          </div>
        </div>
        <div id="profile-top-separator" />
        <div id="profile-top-nav">
          <div id="profile-top-nav-buttons">
            <div className="profile-top-nav-button profile-top-nav-button-focused" id="profile-top-nav-button-posts">
              Posts
            </div>
            <div className="profile-top-nav-button" id="profile-top-nav-button-about">
              About
            </div>
            <div className="profile-top-nav-button" id="profile-top-nav-button-friends">
              Friends
            </div>
            <div className="profile-top-nav-button" id="profile-top-nav-button-photos">
              Photos
            </div>
            <div className="profile-top-nav-button" id="profile-top-nav-button-videos">
              Videos
            </div>
            <div className="profile-top-nav-button" id="profile-top-nav-button-checkins">
              Check-ins
            </div>
            <div className="profile-top-nav-button" id="profile-top-nav-button-more">
              More
              <svg fill="#65676B" viewBox="0 0 20 20" width="16px" height="16px">
                <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z" />
              </svg>
            </div>
          </div>
          <div id="profile-top-nav-options-button">
            <svg fill="#050505" viewBox="0 0 24 24" width="16px" height="16px">
              <circle cx={12} cy={12} r="2.5" />
              <circle cx="19.5" cy={12} r="2.5" />
              <circle cx="4.5" cy={12} r="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div id="profile-sticky-container">
        <div id="profile-top-sticky">
          <div id="profile-top-sticky-profile">
            <svg style={{ cursor: "pointer", borderRadius: "50%" }} width="40px" height="40px">
              <mask id="jsc_c_c">
                <circle cx={20} cy={20} fill="#ffffff" r={20} />
              </mask>
              <g mask="url(#jsc_c_c)">
                <image x={0} y={0} height="100%" width="100%" xlinkHref="../images/default_profile_image.png" />
                <circle fill="transparent" stroke="rgba(0,0,0,0.1)" cx={20} cy={20} r={20} strokeWidth={2} />
              </g>
            </svg>
            <div id="profile-top-sticky-profile-name">Shon Tests</div>
          </div>
        </div>
      </div>
    </>
  );
}
