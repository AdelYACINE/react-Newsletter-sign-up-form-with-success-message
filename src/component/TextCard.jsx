import Form from "./Form";

const TextCard = () => {
  return (
    <div className="text-container">
      <h1 className="title">Stay updated!</h1>
      <p className="text">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="list">
        <li className="list-text text ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
          </span>
          Product discovery and building what matters
        </li>
        <li className="list-text text">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
          </span>
          Measuring to ensure updates are a success
        </li>
        <li className="list-text text">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
          </span>
          And much more!
        </li>
      </ul>

      <Form />
    </div>
  );
};

export default TextCard;
