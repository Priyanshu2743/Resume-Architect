import { useEffect } from 'react';
import Visual0 from './assets/Visual0.svg'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Sec1(){

        useEffect(() => {
        Aos.init({
            duration: 1000,
            mirror: true
        });
        const valuedisplays = document.querySelectorAll('.num');
        let interval = 5000;

        valuedisplays.forEach((valuedisplay) => {
            let startValue = 1900;
            let endValue = parseInt(valuedisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue = startValue + 1;
                valuedisplay.textContent = startValue;
                if (startValue >= endValue) {
                    valuedisplay.textContent = endValue + "+";
                    clearInterval(counter);
                } else {
                    valuedisplay.textContent = startValue;
                }
            }, duration);

            return () => {
                clearInterval(counter);
            };
        });
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <>
        <div className="section-one">
            <div className="container grid grid-three-column">
                <div className = "section-one-content">
                    <div className='sec1-items' data-aos = "fade-in">
                        <h2 className='num' data-val="2000" > 2000+ </h2>
                        <p>Resumes Build Completed</p>
                    </div>
                    <div className='sec1-items' data-aos = "fade-in">
                        <h2 className='num' data-val="2500"> 2500+ </h2>
                        <p>Github Stars</p>
                    </div>
                    <div className='sec1-items' data-aos = "fade-in">
                        <h2 className='num' data-val="3000"> 3000+ </h2>
                        <p>Resumes generated</p>
                    </div>
                    <div className='sec1-items' data-aos = "fade-in">
                        <h2 className='num' data-val="2300"> 2300+ </h2>
                        <p>Users Signed Up</p>
                    </div>
                </div>    
                <div className='section-one-text'>
                    <div className = "section-one-r text-center" data-aos = "zoom-in">
                        <img src = {Visual0} />
                    </div>
                    <div className = "section-one-r text-center" data-aos = "fade-left">
                        <h2 className = "header-title">Don't just dream of a great career, design it with Resume Architect. Start building your success story now!</h2>
                        <div className = "btn-group">
                            <a href = "" className = "btn sectionbtn-primary text-uppercase">create my resume</a>
                            <a href = "#" className = "btn btn-secondary text-uppercase">watch video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sec1