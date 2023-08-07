import { Card } from "react-bootstrap";
import "../feedback.scss";

function FeedBackThankYou({feedbackRate}) {
  return (
    <>
      <div className="d-flex justify-content-center pt-5 ">
        <Card className="feedback">
          <Card.Body>
            <div className="d-flex justify-content-center pt-3">
              <img alt="star" src="illustration-thank-you.svg" />
            </div>
            <div>
              <p className="card-text text-center pt-4"
                 style={{color: "hsl(25, 97%, 53%)"}}
              >
                You selected {feedbackRate} out of 5
              </p>
            </div>
            <Card.Title className="pt-4 d-flex justify-content-center card-title">
              Thank you!
            </Card.Title>
            <Card.Text className="card-text d-flex- justify-content-center text-center">
              We appreciate you taking the time to give a rating .If you ever
              need more support ,don't hesitate to get in touch!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FeedBackThankYou;
