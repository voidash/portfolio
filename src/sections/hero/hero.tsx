import './hero.scss';
import profile from '../../assets/ashish.png';

function hero() {
    return (
        <div className="main">
            <div className="hero-container">
                <div className="hero-container__description">
                    <div className="hero-container__description--name">Ashish Thapa</div>
                    <div className="hero-container__description--brief">Hello, I am Student of Kathmandu University currenlty pursuing Bachelors in Computer Engineering.</div>
                    <a href="google.com" className="hero-container__description--button" >Download CV</a>
                    <div className="hero-container__description--social-links">
                    </div>
                </div>
                <div className="hero-container__profile">
                     {/* <img src={profile} alt="profile" /> */}
                </div>
            </div>
        </div>
    );
}

export default hero;
