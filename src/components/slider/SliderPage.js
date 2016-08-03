import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sliderActions from '../../actions/sliderActions';
import * as sliderConstants from '../../constants/sliderConstants';
import Slider from './Slider';
import Arrow from './ChangeSlideControl';

class SliderPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.startAutoslide = this.startAutoslide.bind(this);
        this.stopAutoslide = this.stopAutoslide.bind(this);
        this.tick = this.tick.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    //noinspection JSUnusedGlobalSymbols
    componentDidMount() {
        this.startAutoslide();
    }

    //noinspection JSUnusedGlobalSymbols
    componentWillUnmount() {
        this.stopAutoslide();
    }

    startAutoslide() {
        const intervalId = setInterval(this.tick, sliderConstants.AUTOSLIDE_INTERVAL_MS);

        this.props.actions.saveAutoslideTimer(intervalId);
    }

    stopAutoslide() {
        const intervalId = this.props.state.changeSlideIntervalId;

        clearInterval(intervalId);
    }

    tick() {
        this.changeSlide(sliderConstants.DIRECTION_RIGHT);
    }

    changeSlide(direction) {
        const { slides, currentSlideIndex } = this.props.state;

        this.props.actions.changeSlide({
            currentSlideIndex,
            direction,
            slideCount: slides.length
        });
    }

    slideLeft() {
        this.stopAutoslide();
        this.changeSlide(sliderConstants.DIRECTION_LEFT);
        this.startAutoslide();
    }

    slideRight() {
        this.stopAutoslide();
        this.changeSlide(sliderConstants.DIRECTION_RIGHT);
        this.startAutoslide();
    }

    //noinspection JSUnusedGlobalSymbols
    render() {
        const { slides, currentSlideIndex } = this.props.state;
        const currentSlide = slides[currentSlideIndex];

        return (
            <Slider
                currentSlide={currentSlide}
                leftClickHandler={this.slideLeft}
                rightClickHandler={this.slideRight}
                slideMouseEnterHandler={this.stopAutoslide}
                slideMouseLeaveHandler={this.startAutoslide} />
        );
    }
}

SliderPage.propTypes = {
    state: PropTypes.shape({
        slides: PropTypes.array.isRequired,
        currentSlideIndex: PropTypes.number.isRequired,
        changeSlideIntervalId: PropTypes.number.isRequired
    }),
    actions: PropTypes.shape({
        changeSlide: PropTypes.func.isRequired,
        saveAutoslideTimer: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(sliderActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);