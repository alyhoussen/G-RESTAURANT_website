import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const imgs = [images.gallery01, images.gallery02,images.gallery03,images.gallery04]



const Gallery = () => {
  
  const scrollRef = React.useRef(null)
  const scroll = (direction)=> {
    const { current } = scrollRef

    if(direction === 'left'){
      current.scroll -= 300;
    }
    else{
      current.scroll +=300;
    }
  }
  
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Gallery" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:"#aaa", marginTop:'2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur ipsum eum quas ipsam ut accusamus, aliquid esse. Aliquid, consequuntur consectetur.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
        {imgs.map((image,index)=>(
          <div className="app__gallery-images_card" flex={`gallery_image-${index+1}`}>
            <img src={image} alt="gallery" />
          </div>
        ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
