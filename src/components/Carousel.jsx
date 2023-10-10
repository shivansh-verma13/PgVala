import Carousel from "react-bootstrap/Carousel";

function CarouselComponent(props) {
  return (
    <div className="carousel">
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
          <div className="carousel-img" style={{ position: "relative" }}>
            <img
              className="d-block w-100 img-1"
              src={props.img1}
              alt="First Slide"
            />
          </div>
          <Carousel.Caption>
            <div
              className="carousel-texts"
              style={{ position: "absolute", top: "-20rem" }}
            >
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="carousel-img" style={{ position: "relative" }}>
            <img
              className="d-block w-100 img-2"
              src={props.img2}
              alt="Second Slide"
            />
          </div>
          <Carousel.Caption>
            <div
              className="carousel-texts"
              style={{ position: "absolute", top: "-20rem" }}
            >
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img" style={{ position: "relative" }}>
            <img
              className="d-block w-100 img-3"
              src={props.img3}
              alt="Third Slide"
            />
          </div>
          <Carousel.Caption>
            <div
              className="carousel-texts"
              style={{ position: "absolute", top: "-20rem" }}
            >
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
