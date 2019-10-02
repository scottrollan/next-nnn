import React from "react";
import FollowUs from "../components/FollowUs";
import Layout from "./Layout";

const AboutUs = () => {
  return (
    <Layout>

        <p className="pText">
          Nearly Native Nursery is a specialty nursery that promotes, sells, and
          propagates southeastern native plants for all types of landscapes. We
          offer a wide variety of native southeastern plant life not found in
          your typical garden center.
        </p>
        <img
          src="../static/jimdebi.jpg"
          alt="Nearly Native Nursery"
          className="image"
          id="jimDebi"
        />
        <p className="pText">
          Native plants offer a tough, verastile and beautiful alternative with
          lower maintenance to the imported, more exotic general nursery stock.
          Native plants are more suitable to local water, soil and pest
          conditions. Many of these native plants also serve as food for
          beautiful songbirds as well as hosts for many species of butterflies
          and moths. Once established, native plants can tough out drought and
          water restrictions that many other plants are unable to tolerate.
        </p>
        <div className="aside">
          <FollowUs style={{ color: '#cccccc' }}/>
        </div>
        <p className="pText">
          There is always a native alternative to an exotic plant, and many
          times, the native species will be a much more interesting and
          spectacular specimen. Specific site requirements, such as low, soggy
          ground, or steep, dry slopes can become beautiful focal points with
          the right native plants in place.
        </p>
        <p className="pText">
          Our staff is knowledgeable and eager to discuss native plants with all
          of our customers. If we cannot think of the right native option or
          options for you instantly, we will research your situation and get
          back to you with a response as soon as possible.
        </p>
        <p className="pText">
          So, if you are near Atlanta, Georgia, stop by the Nearly Native
          Nursery’s retail location in Fayetteville and check out our dazzling
          array of gorgeous native plants available for you.
        </p>
        <p className="pText">
          We hope that you find our site interesting and educational! Thanks for
          visiting our website.
        </p>

      <style jsx>{`

        .aside {
            width: 10vw;
            text-align: center;
            float: right;
            margin-left: 3vw;
            font-size: 6vw;
        }

        .image {
            width: 200px;
            float: left;
            margin-right: 2vw;

        }
          .pText {
            font-size: calc(18px + 1vw);
            text-align: justify;
          }
      `}</style>

    </Layout>
  );
};

export default AboutUs;
