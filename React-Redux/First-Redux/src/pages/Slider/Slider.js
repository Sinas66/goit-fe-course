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
    images: [image0, image1, image2, image3, image4, image5, image6, image7],
  };

  render() {
    const { images } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src={images[0]} alt="" className={styles.slider_img} />
        </div>
      </div>
    );
  }
}

export default Slider;
