import { Card } from "react-bootstrap";
import "../feedback.scss";

function FeedBackThankYou({ feedbackRate }) {
  return (
    <>
      <div className="d-flex justify-content-center pt-5 ">
        <Card className="feedback">
          <Card.Body>
            <div
              className="d-flex justify-content-center pt-3"
              style={{ height: "110px" }}
            >
              <img alt="star" src="illustration-thank-you.svg" />
            </div>
            <div>
              <p className="card-text text-center pt-4">
                <span
                  style={{
                    color: "#e27f3b",
                    backgroundColor: "#2d363f",
                    borderRadius: "25px",
                    padding: "6px 10px", 
                  }}
                >
                  You selected {feedbackRate} out of 5
                </span>
              </p>
            </div>
            <Card.Title className="pt-4 d-flex justify-content-center card-title">
              Thank you!
            </Card.Title>
            <Card.Text className="card-text d-flex- justify-content-center text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FeedBackThankYou;
