import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DropdownTransfer = (props) => {
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
                {/* GENDER */}

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
                        Transfer
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
                        <div
                          className="btn-group btn-group-toggle col-lg row"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-warning active voucher-radio">
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              autoComplete="off"
                            />{" "}
                            BNI
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="options"
                              id="option2"
                              autoComplete="off"
                            />{" "}
                            BRI
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            Mandiri
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            BCA
                          </label>
                          <label className="btn btn-warning voucher-radio">
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              autoComplete="off"
                            />{" "}
                            BTN
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

// Sidebar.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   published: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

export default DropdownTransfer;
