import React, { Component } from 'react';
import styles from './Slider.module.css';
import image0 from '../../img/slider/active-body-exercise-2294353.jpg';
import image1 from '../../img/slider/adorable-bed-boy-2317020.jpg';
import image2 from '../../img/slider/beautiful-beauty-blurred-background-1239291.jpg';
import image3 from '../../img/slider/beef-cooking-cuisine-2313686.jpg';
import image4 from '../../img/slider/break-business-businessman-2182982.jpg';
import image5 from '../../img/slider/close-up-daylight-fashion-2005992.jpg';
import image6 from '../../img/slider/clouds-coconut-trees-daytime-1168764.jpg';
import image7 from '../../img/slider/Lifestyle_1-min.jpg';

class Slider extends Component {
  state = {
    images: [
      { img: image0, id: 0 },
      { img: image1, id: 1 },
      { img: image2, id: 2 },
      { img: image3, id: 3 },
      { img: image4, id: 4 },
      { img: image5, id: 5 },
      { img: image6, id: 6 },
      { img: image7, id: 7 },
    ],
    fullImg: 0,
  };

  showImg = id => {
    this.setState({ fullImg: id });
  };

  randomId = () => {
    const a = Math.floor(Math.random() * 2000);
    console.log(a);
    return a;
  };

  render() {
    const { images, fullImg } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={images[fullImg].img} alt="" className={styles.slider_img} />
        </div>
        <div className={styles.ul_wrapper}>
          <ul>
            {images.map(el => (
              <li key={el.id} onClick={() => this.showImg(el.id)}>
                <img src={el.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
