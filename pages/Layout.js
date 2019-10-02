import React from 'react';
import Head from "next/head";
import Nav from "../components/nav";

const Layout = (props) => (
  <div>
    <Head>
      <title>Nearly Native Nursery</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
      <link rel="stylesheet" href="https://bootswatch.com/3/paper/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous"></link>
    </Head>

    <Nav />

    <div className="layout">
      {props.children}
    </div>
    <style jsx>{`
      .layout {
        padding: 0 3vw;
      }
    `}</style>
  </div>
);

export default Layout;
