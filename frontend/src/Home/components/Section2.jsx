import { useEffect, useState } from 'react'
import Feature1 from './assets/images/img1.png'
import Feature2 from './assets/images/img2.png'
import Feature3 from './assets/images/img4.png'
import Feature4 from './assets/images/img6.png'
import Feature5 from './assets/images/img7.png'
import Feature6 from './assets/images/img8.png'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Sec2(){
    useEffect(() => {
        Aos.init({
            duration: 800
        })
    }, []);
    return(
        <>
        <div className='section-two bg-bright'>
        <h2 className='heading'> Templates </h2>
        <div className='heading-line'></div>
        <div className = "section-items" data-aos = "zoom-in">
        <div className="card1">
            <img src={Feature1} className='card-img' alt='' />
            <div className='card-body'>                
                <button className='card-btn'> Make Resume </button>
            </div>
        </div>
        <div className="card1">
            <img src={Feature2} className='card-img' alt='' />
            <div className='card-body'>                
                <button className='card-btn'> Make Resume </button>
            </div>
        </div>
        <div className="card1">
            <img src={Feature3} className='card-img' alt='' />
            <div className='card-body'>
                <button className='card-btn'><h6 className='btn-text'> Make Resume </h6></button>
            </div>
        </div>
        <div className="card1">
            <img src={Feature4} className='card-img' alt='' />
            <div className='card-body'>                
                <button className='card-btn'> Make Resume </button>
            </div>
        </div>
        <div className="card1">
            <img src={Feature5} className='card-img' alt='' />
            <div className='card-body'>                
                <button className='card-btn'> Make Resume </button>
            </div>
        </div>
        <div className="card1">
            <img src={Feature6} className='card-img' alt='' />
            <div className='card-body'>                
                <button className='card-btn'> Make Resume </button>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Sec2