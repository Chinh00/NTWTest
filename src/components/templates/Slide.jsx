import { useEffect, useState } from "react";

const images = ["/images/ufi2700.jpg", "/images/ufi2707.jpg"];

export const Slide = () => {
  const [show, setShow] = useState(0);

  

  const handleShow = () => {
    setShow(show == 0 ? 1 : 0);
  };
  return (
    <div className="slide">
      <button onClick={handleShow}>
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

      {images.map((val, key) => {
        return (
          key == show && (
            <div key={key}>
              <img src={val} />
            </div>
          )
        );
      })}

      <button onClick={handleShow}>
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
  );
};
