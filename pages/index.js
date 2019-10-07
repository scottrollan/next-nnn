import React from "react";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="page">
        <div className="logo">
          <img src="../static/N3man.png" alt="" style={{ width: "100%" }} />
        </div>

        <br />
        <h3 className="">
          Proud to be selected as a <em>Garden Watchdog Top 5</em> company for
          FIVE years in a row By Dave's Garden:
          <br />
          <a
            href="https://davesgarden.com/products/gwd/c/759"
            target="_blank"
            rel="noopener noreferrer"
            className="readMore"
          >
            <strong>Read more...</strong>
          </a>
        </h3>

        <div className="bottom">
          <a
            href="https://www.instagram.com/explore/locations/39376531/nearly-native-nurserynative-oasis-botanical-garden/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{ float: "left" }}
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
            style={{ float: "right" }}
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <p className="subText">776 McBride Road, Fayetteville, Ga 30215</p>
          <p className="subText">770-460-6284</p>
        </div>

        <style jsx>{`
          .page {
            margin: 0;
            min-height: 95vh;
            background-image: url(../static/skipperOnEchinacea.jpg);
            background-repeat: none;
            background-size: cover;
          }

          .logo {
            padding: 3vh 4vw;
            width: 24vw;
          }

          .readMore {
            color: #eeeeee;
          }

          .readMore:hover {
            color: #0000ff;
          }
          
          h3 {
            font-size: calc(18px + 1vw);
            color: #eee;
            text-align: center;
            padding: 0 2vw 15vh;
          }

          .bottom {
            margin: 5vh auto;
            width: 60%;
            font-size: 8vw;
            text-align: center;
          }
          .bottom i {
            color: #cccccc;
          }

          .subText {
            color: #cccccc;
            font-size: calc(18px + .5vw);
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Home;
