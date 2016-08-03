import React, { PropTypes } from 'react';
import * as sliderConstants from '../../constants/sliderConstants';
import Slide from './Slide';
import Arrow from './ChangeSlideControl';

const Slider = ({ currentSlide, leftClickHandler, rightClickHandler, slideMouseEnterHandler, slideMouseLeaveHandler }) => {
    return (
        <div className="slider text-center">
            <Arrow direction={sliderConstants.DIRECTION_LEFT} clickHandler={leftClickHandler} />
            <Slide
                hero={currentSlide.hero}
                image={currentSlide.image}
                text={currentSlide.text}
                mouseEnterHandler={slideMouseEnterHandler}
                mouseLeaveHandler={slideMouseLeaveHandler} />
            <Arrow direction={sliderConstants.DIRECTION_RIGHT} clickHandler={rightClickHandler} />
        </div>
    );
};

Slider.propTypes = {
    currentSlide: PropTypes.shape({
        hero: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    leftClickHandler: PropTypes.func.isRequired,
    rightClickHandler: PropTypes.func.isRequired,
    slideMouseEnterHandler: PropTypes.func,
    slideMouseLeaveHandler: PropTypes.func
};

export default Slider;