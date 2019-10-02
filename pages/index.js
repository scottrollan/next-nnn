import React from "react";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="page">
      <div className="logo">
        <img 
          src='../static/N3man.png' 
          alt='' 
          style={{ width: '100%' }}/>
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
        ><strong>Read more...</strong>
        </a>
      </h3>
      {/* <div>
        <img 
          src='../static/skipperOnEchinacea.jpg' 
          alt=''
          style={{ opacity: '.75' }} /> 
      </div> */}
      {/* <div style={carouselStyles} className="carousel">
          <Carousel />
        </div> */}
      <div className="bottom">
        <a
          href="https://www.instagram.com/explore/locations/39376531/nearly-native-nurserynative-oasis-botanical-garden/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ float: 'left' }}
        >
          <i className="fab fa-instagram icon-4x"></i>
        </a>
        {/* <br /> */}
        <a
          href="https://www.facebook.com/pg/NearlyNativeNursery/posts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        {/* <br /> */}
        <a
          href="https://twitter.com/NNativeNursery"
          target="_blank"
          rel="noopener noreferrer"
          style={{ float: 'right' }}

        >
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
      <style jsx>{`
        .page {
          margin-top: 0;
          background-image: url(../static/skipperOnEchinacea.jpg);
          backgroung-repeat: none;
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
        .bottom {
          margin: 5vh auto;
          width: 50%;
          font-size: 8vw;
          text-align: center;
        }
        .bottom i {
          color: #cccccc;
        }

        h3 {
          font-size: calc(18px + 1vw);
          color: #eee;
          text-align: center;
          padding: 0 2vw;
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default Home;
