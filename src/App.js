
import './App.css';
import Gallery from './components/Gallery';

import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';

let urls = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
  {
    id: 5,
    url: image5,
  }
]


function App() {
  return (
    <div className="container">
    <h1> React Image Gallery Component</h1>
      <Gallery imageUrls={urls}></Gallery>
  </div >
  );
}

export default App;
