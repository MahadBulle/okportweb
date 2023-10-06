import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.15752-9/384563404_239799899065678_8000091403285438783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3hMd_qaNZSEAX_hfroh&_nc_ht=scontent-mba1-1.xx&oh=03_AdQRv4-JXvE82tfpo_s0XRqwDIsva4BSJDC100P9bQReSw&oe=65468A50"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Invoice generator project
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/MahadBulle/invoicegenProFrontAd.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.15752-9/384559594_986345802652244_917508593303299878_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YoEz867oP3kAX-QaYnp&_nc_ht=scontent-mba1-1.xx&oh=03_AdRVTc9BCXrc7geagNoyalwAFeOIvV8PD6soD3xeRJiIXQ&oe=65465562"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">betahouse admin</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://beta-houses.vercel.app/dashboard/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-endweb</span>
                  <img
                    src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.15752-9/384557869_855944256143039_5937637921703762869_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YTlAa3dGdPwAX8BL4X7&_nc_ht=scontent-mba1-1.xx&oh=03_AdT6hUy4JXNOoqzXl-DAFGRhoRYGZplmsHqauSgtVdeR7g&oe=6546737F"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Reactjs</span>
                  <span className="card-detail-badge">Material UI</span>

                  <span className="card-detail-badge">TailwindCss</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Beta small website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://betaweb.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
