import React from 'react';

const HeaderComponent = () => {
    return(
        <nav className="indigo darken-1">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">TaskApp</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a>Sass</a></li>
                <li><a>Components</a></li>
                <li><a>JavaScript</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default HeaderComponent;