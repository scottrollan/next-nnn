import Layout from "./Layout";

const Hours = () => {
  return (
    <Layout>
      <div className="card mb-3" style={{ width: "40%", margin: "0 auto 70px", textAlign: 'center', boxShadow: '5px 10px 18px #cccccc' }}>
        <h3 className="card-header">Hours</h3>
        <div className="card-body">
          <h5 className="card-title">Wednesday - Saturday, 9:00 - 6:00</h5>
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
    </Layout>
  );
};

export default Hours;
