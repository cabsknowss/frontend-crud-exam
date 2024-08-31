import React from "react";
import { Container, Card } from "reactstrap";

function Index() {
  return (
    <div className="page-home">
      <div className="page-main__container">
        <h1 className="page-main__title">Home</h1>
        <div className="page-home__content">
          <div>
            <h2 className="fs-primary-heading fw-bold margin-block-400 text-neutral-700">
              Kenneth D. Cabobos
            </h2>
          </div>
          <div>
            <a href="mailto:caboboskennethzxc@gmail.com">
              <h3 className="fw-semi-bold margin-block-200">
                caboboskennethzxc@gmail.com
              </h3>
            </a>
          </div>
          <div>
            <a href="tel:+639453478092">
              <h3 className="fw-semi-bold">(+63) 945-347-8092</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
