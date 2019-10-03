import React from "react";

const FollowUs = props => {
  return (
    <React.Fragment>
      <a
        href="https://www.instagram.com/explore/locations/39376531/nearly-native-nurserynative-oasis-botanical-garden/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram icon-4x"></i>
      </a>
      <a
        href="https://www.facebook.com/pg/NearlyNativeNursery/posts/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://twitter.com/NNativeNursery"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter-square"></i>
      </a>
      <style jsx>{`
        i {
          color: #cccccc
        }
        i:hover {
          color: #107f07;
        }
      `}</style>
    </React.Fragment>
  );
};

export default FollowUs;