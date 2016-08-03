import React, { PropTypes } from 'react';

const ChangeSlideControl = ({ clickHandler, direction }) => {
    return (
        <div className="slider-arrow slide-left" onClick={clickHandler}>
            {direction === 'LEFT' ? '<' : '>'}
        </div>
    );
};

ChangeSlideControl.propTypes = {
    direction: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};

export default ChangeSlideControl;