import { useEffect, useState, useRef } from 'react';
import '../../assets/css/home.css'

const data = [
  "/images/ufi2656.jpg",
  "/images/ufi2659.jpg",
  "/images/ufi2666.jpg"
];

export const ContentSlide = () => {
    const [show, setShow] = useState(0)
    const timeout = useRef(null);
    useEffect(() => {
        const nextSlide = () => {
            setShow(show => (show === data.length - 1 ? 0 : show + 1)) 
        }
        const timeout = setTimeout(nextSlide, 2000)
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [show, data.length])
    

    const nextSlide = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setShow(show === data.length - 1 ? 0 : show + 1);
    };

    const prevSlide = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setShow(show === 0 ? data.length - 1 : show - 1);
    };
    return (
      <div className="app_slide">
        <div className="app">
          <button onClick={prevSlide}>
            <div className="pre" id="pre">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </div>
          </button>
          {data.map((val, key) => {
            return (
              show === key && (
                <div className="slide_item" key={key}>
                  <img src={val} alt="" width={1200} />
                </div>
              )
            );
          })}
          <button onClick={nextSlide}>
            <div className="next" id="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
}