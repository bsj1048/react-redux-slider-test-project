import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { Provider } from 'react-redux';
import App from './components/App';

const getInitialState = () => {
    return {
        "slides": [
            {
                "hero":"https://placeimg.com/640/480/animals",
                "text":"Animals are here.",
                "image":"https://placeimg.com/150/150/animals/sepia"
            },
            {
                "hero":"https://placeimg.com/640/480/people",
                "text":"People are here.",
                "image":"https://placeimg.com/150/150/people/sepia"
            },
            {
                "hero":"https://placeimg.com/640/480/tech",
                "text":"Tech is here.",
                "image":"https://placeimg.com/150/150/tech/sepia"
            }
            /*
            {
                hero: 'http://www.dailymobile.net/wp-content/uploads/wallpapers/android-640x480-wallpapers/android-640x480-wallpaper-4582.jpg',
                text: 'First is here',
                image: 'http://quuppa.com/wp/wp-content/uploads/2015/04/icon-customize-150x150.png'
            },
            {
                hero: 'http://www.mwallpaper.com/images/battlefield_3_640x480_8099.jpg',
                text: 'Second is here',
                image: 'http://simpleicon.com/wp-content/uploads/webcam_1-150x150.png'
            },
            {
                hero: 'http://wfiles.brothersoft.com/7d/android_189005-640x480.jpg',
                text: 'Third is here',
                image: 'http://simpleicon.com/wp-content/uploads/radio_3-150x150.png'
            },
            {
                hero: 'http://tremendouswallpapers.com/wp-content/uploads/2015/07/13d60566-0e15.jpg',
                text: 'Fourth is here',
                image: 'http://simpleicon.com/wp-content/uploads/dish1-150x150.png'
            }
            */
        ],
        "currentSlideIndex": 0,
        "changeSlideIntervalId": 0
    };
};

const store = configureStore(getInitialState());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);