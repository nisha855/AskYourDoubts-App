import React from 'react'

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt='' />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ipsa mollitia sed saepe exercitationem! Et molestiae debitis ut voluptas. Tenetur molestiae explicabo sunt magni consequatur.</p>
                <button>
                    {props.button}
                </button>
            </div>

        </div>
    )
}

export default About
