import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import useTailwindBreakpoints  from "./lib/useTailwindBreakpoints";
import heartSrc from "./assets/heart.svg";
import testimonialSpiegelSrc from "./assets/images//testimonial-spiegel.jpg";
import testimonialSantiSrc from "./assets/images/testimonial-santi.jpg";
import testimonialVivianSrc from "./assets/images/testimonial-vivian.jpg";
import './css/Testimonial.css'
import './css/style.css'

const TESTIMONIALS = [
  {
    src: testimonialSpiegelSrc,
    quote:
      "Students often make silly mistakes on their resume by using inconsistent bullet points or font sizes. Resume Architect’s auto format feature is a great help to ensure consistent format.",
    name: "Ms. Spiegel",
    title: "Educator",
  },
  {
    src: testimonialSantiSrc,
    quote:
      "I used Resume Architect during my last job search and was invited to interview at top tech companies such as Google and Amazon thanks to its slick yet professional resume design.",
    name: "Santi",
    title: "Software Engineer",
  },
  {
    src: testimonialVivianSrc,
    quote:
      "Creating a professional resume on Resume Architect is so smooth and easy! It saves me so much time and headache to not deal with google doc template.",
    name: "Vivian",
    title: "College Student",
  },
];

const LG_TESTIMONIALS_CLASSNAMES = [
  "z-10",
  "translate-x-44 translate-y-24 opacity-40",
  "translate-x-32 -translate-y-28 opacity-40",
];
const SM_TESTIMONIALS_CLASSNAMES = ["z-10", "opacity-0", "opacity-0"];
const ROTATION_INTERVAL_MS = 4 * 1000; // 8s

const Testimonials = ({ children }) => {
  const [testimonialsClassNames, setTestimonialsClassNames] = useState(
    LG_TESTIMONIALS_CLASSNAMES
  );
  const isHoveredOnTestimonial = useRef(false);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHoveredOnTestimonial.current) {
        setTestimonialsClassNames((preClassNames) => {
          return [preClassNames[1], preClassNames[2], preClassNames[0]];
        });
      }
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  const { isLg } = useTailwindBreakpoints();
  useEffect(() => {
    setTestimonialsClassNames(
      isLg ? LG_TESTIMONIALS_CLASSNAMES : SM_TESTIMONIALS_CLASSNAMES
    );
  }, [isLg]);

  return (
    <section className="mx-auto mt-8 px-8 pb-72">
      <h2 className="mb-8 text-center text-4xl font-bold">
        People{" "}
        <img src={heartSrc} alt="love" className="-mt-1 inline-block w-10" />{" "}
        Resume-Architect
      </h2>
      <div className="mx-auto mt-7 h-[235px] max-w-3xl lg:h-[300px] lg:pt-36">
        <div className="relative lg:ml-[-50px]">
          {TESTIMONIALS.map(({ src, quote, name, title }, idx) => {
            const className = testimonialsClassNames[idx];
            return (
              <div
                key={idx}
                className={`bg-primary absolute max-w-2xl rounded-[1.7rem] bg-opacity-30 shadow-md transition-all duration-1000 ease-linear ${className}`}
                onMouseEnter={() => {
                  if (className === "z-10") {
                    isHoveredOnTestimonial.current = true;
                  }
                }}
                onMouseLeave={() => {
                  if (className === "z-10") {
                    isHoveredOnTestimonial.current = false;
                  }
                }}
              >
                <figure 
                className="m-1 flex gap-5 rounded-3xl bg-white p-5 text-gray-900 lg:p-7" 
                style={{minHeight: "160px"}}
                >
                  <img
                    className="hidden h-32 w-36 select-none rounded-full lg:block"
                    src={src}
                    alt="profile"
                  />
                  <div>
                    <blockquote>
                      <p className="quote before:content-['“'] after:content-['”']"> 
                        {quote}
                      </p>
                    </blockquote>
                    <figcaption className="mt-3">
                      <div className="hidden gap-2 lg:flex">
                        <div className="font-semibold">{name}</div>
                        <div
                          className="select-none text-gray-700"
                          aria-hidden="true"
                        >
                          •
                        </div>
                        <div className="text-gray-600">{title}</div>
                      </div>
                      <div className="flex gap-4 lg:hidden">
                        <img
                          className=" block h-12 w-12 select-none rounded-full"
                          src={src}
                          alt="profile"
                        />
                        <div>
                          <div className="font-semibold">{name}</div>
                          <div className="text-gray-600">{title}</div>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </section>
  );
};

Testimonials.propTypes = {
  children: PropTypes.node,
};

export default Testimonials;
