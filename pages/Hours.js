import Layout from "./Layout";

const Hours = () => {
  return (
    <Layout>
      <div className="card mb-3 myCard">
        <h3 className="card-header myHeader">Hours</h3>
        <div className="card-body">
          <h5 className="card-title schedule">Wednesday - Saturday, 9:00 - 6:00</h5>
          <h6 className="card-subtitle text-muted">...and by appointment...</h6>
        </div>
        <img
          style={{ width: "100%", display: "block" }}
          src="../static/hours.jpg"
          alt=""
        />
        <div className="card-body">
        <p className="card-text">776 McBride Road, Fayetteville, Ga 30215</p>
        <p className="card-text">770-460-6284</p>
        </div>
        <div className="card">
          <div className="card-body">
            <a href="tel:1-770-460-6284" className="card-link" style={{ fontSize: '18px', float: 'left', marginLeft: '3vw' }}>
              Call Us
            </a>
            <a href="mailto:info@nearlynativenursery.com" className="card-link" style={{ fontSize: '18px', float: 'right', marginRight: '3vw' }}>
              Email Us
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .myCard {
          width: 40%;
          margin: 0 auto 3vh;
          text-align: center;
          box-shadow: 5px 10px 18px #cccccc;
        }

        @media screen and (max-width: 780px) {
          .myCard {
            width: 80%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Hours;
