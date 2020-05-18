import React from "react";

const PaymentMethod = (props) => {
  return (
    <React.Fragment>
      <div className="bg-gra-03 sidebar">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div
                  className="btn-group btn-group-toggle col-lg row"
                  data-toggle="buttons"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          <i className="fas fa-university mr-2"></i>
                          Transfer Bank
                          <i className="fas fa-caret-down ml-2" />
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="row my-4 game-links d-flex justify-content-center">
                          <label className="btn btn-warning active voucher-radio">
                            <input
                              type="radio"
                              id="option1"
                              autoComplete="off"
                              name="bank"
                              value="bni"
                              onClick={(e) => props.changeInputPayment(e)}
                            />{" "}
                            BNI
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="bank"
                              value="bri"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option2"
                              autoComplete="off"
                            />{" "}
                            BRI
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="bank"
                              value="mandiri"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            MANDIRI
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="bank"
                              value="bca"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            BCA
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="bank"
                              value="btn"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            BTN
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                         <i className="fas fa-phone mr-2"></i>
                          Pulsa
                          <i className="fas fa-caret-down ml-2" />
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse2"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="row my-4 game-links d-flex justify-content-center">
                          <label className="btn btn-warning active voucher-radio">
                            <input
                              type="radio"
                              name="pulsa"
                              value="telkomsel"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option1"
                              autoComplete="off"
                            />{" "}
                            TELKOMSEL
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="pulsa"
                              value="xl"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option2"
                              autoComplete="off"
                            />{" "}
                            XL
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="pulsa"
                              value="indosat"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            INDOSAT
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="pulsa"
                              value="three"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            THREE
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="pulsa"
                              value="by.u"
                              onClick={(e) => props.changeInputPayment(e)}
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            BY.U
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentMethod;
