import React from "react";

const Home = () =>(
    <div className="container">
    <div id="headerwrap" name="home" style={{background: 'url("https://fondosmil.com/fondo/2258.jpg") no-repeat center top', backgroundSize: 'cover'}}>
        <header className="clearfix">
          <h1><span className="icon icon-shield" /></h1>
          <p>A Bootstrap 3 One Page Theme.</p>
          <p>Exclusive for BlackTie.co.</p>
        </header>	    
    </div>

    <div id="greywrap">
        <div className="row">
          <div className="col-lg-4 callout">
            <span className="icon icon-stack" />
            <h2>Bootstrap 3</h2>
            <p>Shield Theme is powered by Bootstrap 3. The incredible Mobile First Framework is the best option to run your website. </p>
          </div>{/* col-lg-4 */}
          <div className="col-lg-4 callout">
            <span className="icon icon-eye" />
            <h2>Retina Ready</h2>
            <p>You can use this theme with your iPhone, iPad or MacBook Pro. This theme is retina ready and that is awesome. </p>
          </div>{/* col-lg-4 */}	
          <div className="col-lg-4 callout">
            <span className="icon icon-heart" />
            <h2>Crafted with Love</h2>
            <p>We don't make sites, we craft themes with love &amp; passion. That is our most valued secret. We only do thing that we love. </p>
          </div>{/* col-lg-4 */}	
        </div>{/* row */}
      </div>

      <div className="container" id="about" name="about">
        <div className="row white">
          <br />
          <h1 className="centered">A LITTLE ABOUT OUR AGENCY</h1>
          <hr />
          <div className="col-lg-6">
            <p>We believe ideas come from everyone, everywhere. In fact, at BlackTie, everyone within our agency walls is a designer in their own right. And there are a few principles we believe—and we believe everyone should believe—about our design craft. These truths drive us, motivate us, and ultimately help us redefine the power of design. We’re big believers in doing right by our neighbors. After all, we grew up in the Twin Cities and we believe this place has much to offer. So we do what we can to support the community we love.</p>
          </div>{/* col-lg-6 */}
          <div className="col-lg-6">
            <p>Over the past four years, we’ve provided more than $1 million in combined cash and pro bono support to Way to Grow, an early childhood education and nonprofit organization. Other community giving involvement throughout our agency history includes pro bono work for more than 13 organizations, direct giving, a scholarship program through the Minneapolis College of Art &amp; Design, board memberships, and ongoing participation in the Keystone Club, which gives five percent of our company’s earnings back to the community each year.</p>
          </div>{/* col-lg-6 */}
        </div>{/* row */}
      </div>
      {/* ==== SECTION DIVIDER1 */}
      <section className="section-divider textdivider divider1" style={{background: 'url("images/bg/divider1.jpg")'}}>
        <div className="container">
          <h1>DESIGN EXPAND BOUNDARIES</h1>
          <hr />
          <p>To achieve real change, we have to expand boundaries. Because the Wild West of what-could-be is unexplored but rife with opportunity.</p>
        </div>{/* container */}
      </section>
      {/* ==== SECTION DIVIDER4 ==== */}
      <section className="section-divider textdivider divider4" style={{background: 'url("images/bg/divider4.jpg")'}}>
          <div className="container">
            <h1>DESIGN CREATES EMOTIONAL CONNECTION</h1>
            <hr />
            <p>There’s more to design than meets the eye. It’s when it meets the heart that design creates a meaningful, lasting connection with the audience.</p>
          </div>{/* container */}
        </section>{/* section */}
        {/* ==== BLOG ==== */}
        <div className="container" id="blog" name="blog">
          <br />
          <div className="row">
            <br />
            <h1 className="centered">WE ARE STORYTELLERS</h1>
            <hr />
            <br />
            <br />
          </div>{/* /row */}
          <div className="row">
            <div className="col-lg-6 blog-bg">
              <div className="col-lg-4 centered">
                <br />
                <p><img className="img img-circle" src="images/team/team04.jpg" width="60px" height="60px" /></p>
                <h4>Jaye Smith</h4>
                <h5>Published Aug 30.</h5>
              </div>
              <div className="col-lg-8 blog-content">
                <h2>We Define Success</h2>
                <p>Armed with insight, we embark on designing the right brand experience that engages the audience. It encompasses both the strategic direction and creative execution that solves a business problem and brings the brand to life.</p>
                <p>In the create phase, the big idea is unleashed to the world through different media touchpoints. This is when we watch the audience fall in love all over again with our client’s brand.</p>
                <p><a href="#" className="icon icon-link"> Read More</a></p>
                <br />
              </div>
            </div>{/* /col */}
            <div className="col-lg-6 blog-bg">
              <div className="col-lg-4 centered">
                <br />
                <p><img className="img img-circle" src="images/team/team03.jpg" width="60px" height="60px" /></p>
                <h4>Michele Lampa</h4>
                <h5>Published Aug 28.</h5>
              </div>
              <div className="col-lg-8 blog-content">
                <h2>A Beautiful Story</h2>
                <p>Armed with insight, we embark on designing the right brand experience that engages the audience. It encompasses both the strategic direction and creative execution that solves a business problem and brings the brand to life.</p>
                <p>In the create phase, the big idea is unleashed to the world through different media touchpoints. This is when we watch the audience fall in love all over again with our client’s brand.</p>
                <p><a href="#" className="icon icon-link"> Read More</a></p>
                <br />
              </div>
            </div>{/* /col */}
          </div>{/* /row */}
          <br />
          <br />
        </div>{/* /container */}
       </div>
);
export default Home;