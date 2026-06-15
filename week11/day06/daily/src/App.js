import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './App.css';

const slides = [
  {
    title: 'Hong Kong',
    image: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
    caption: 'A dazzling city of lights and harbor views.'
  },
  {
    title: 'Macao',
    image: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
    caption: 'A vibrant blend of casinos, culture, and cuisine.'
  },
  {
    title: 'Japan',
    image: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
    caption: 'Discover temples, neon streets, and culinary wonders.'
  },
  {
    title: 'Las Vegas',
    image: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp',
    caption: 'The entertainment capital with bright lights and energy.'
  }
];

function App() {
  return (
    <div className="app-container">
      <div className="carousel-card shadow-sm">
        <header className="carousel-header text-center mb-4">
          <h1>React Travel Carousel</h1>
          <p className="text-muted">Built with react-responsive-carousel and Bootstrap</p>
        </header>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          transitionTime={600}
          useKeyboardArrows
          emulateTouch
          swipeable
          dynamicHeight={false}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="carousel-slide">
              <img src={slide.image} alt={slide.title} />
              <div className="legend-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.caption}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
