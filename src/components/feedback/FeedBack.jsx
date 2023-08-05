import { Card } from "react-bootstrap";
import { useState } from "react";
import "../feedback.scss";
import { useNavigate } from "react-router-dom";
const buttons = [1, 2, 3, 4, 5];
function FeedBack({ selectFeebackRate }) {
  const [number, selectNumber] = useState(null);
  const navigate = useNavigate();
  const OnSelectNumber = (number) => {
    selectNumber(number);
  };

  const OnSubmit = () => {
    selectFeebackRate(number);
    navigate("/thankYou");
  };

  return (
    <>
      <div className="d-flex justify-content-center pt-5 ">
        <Card className="feedback">
          <Card.Body>
            <div>
              <button className="star-icon">
                <img alt="star" src="icon-star.svg" />
              </button>
            </div>
            <Card.Title
              className="pt-4 card-title"
            >
              How did we do?
            </Card.Title>
            <Card.Text className="card-text">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Card.Text>
            <div className="d-flex justify-content-around mb-3">
              {buttons.map((item) => (
                <button
                type="button"
                className={`circular-button ${number === item ? "button-selected" : "button-not-selected"}`}
                onClick={() => OnSelectNumber(item)}
                key={item}
              >
                {item}
              </button>
              ))}
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="rounded-pill d-felx justify-content-center mt-2 submit-button"
                onClick={OnSubmit}
              >
                SUBMIT
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FeedBack;
