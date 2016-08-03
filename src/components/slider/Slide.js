import React, { PropTypes } from 'react';

const Slide = ({ hero, image, text, mouseEnterHandler, mouseLeaveHandler }) => {
    return (
        <div className="slide" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <img src={hero} />
            <div className="slide-overlay">
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <img src={image} />
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <span>{text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Slide.propTypes = {
    hero: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    mouseEnterHandler: PropTypes.func,
    mouseLeaveHandler: PropTypes.func
};

export default Slide;