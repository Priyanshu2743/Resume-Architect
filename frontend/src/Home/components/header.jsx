import { useEffect } from 'react';
import Kunal from './assets/images/Kunal Kumar Resume.jpg'
import VanillaTilt from 'vanilla-tilt';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Header() {
    useEffect(() => {
        VanillaTilt.init(document.querySelector('.tilt-element'));
        Aos.init({
            duration: 400,
            mirror: true,
            easing: 'ease-in'
        });
    }, []);

    return (
        <header className="header bg-bright" id="header">
            <div className="container">
                <div className="header-content text-center">
                    {/* <h6 className="text-uppercase text-blue-dark fs-14 fw-6 ls-1">online resume builder</h6> */}
                    <h1 className="header-title" data-aos = "zoom-in">Crafting Your Career Masterpiece</h1>
                    <p className="text-dark fs-18" data-aos = "fade">Welcome to Resume Architect, where we design your path to success with cutting-edge resumes that stand out in the digital jungle. Our innovative tools and expert advice will sculpt your professional story into a captivating narrative that employers can't resist. Build your future with Resume Architect today!</p>
                    <a href="http://localhost:3000/builder" className="btn headerbtn-primary text-uppercase">create my resume</a>
                    <div className="tilt-element" data-tilt><img src={Kunal} className='tilt-image' alt="Kunal Kumar Resume" /></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
