import React from 'react';
import FeatureBox from './FeatureBox';
import featureImage from '../images/feature_1.png';
import featureImage1 from '../images/feature_2.png';
import featureImage2 from '../images/feature_3.png';

function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureImage} title="Web Development " />
                <FeatureBox image={featureImage1} title="App Development" />
                <FeatureBox image={featureImage2} title="Competitive Programming" />

            </div>
        </div>
    )
}

export default Feature
