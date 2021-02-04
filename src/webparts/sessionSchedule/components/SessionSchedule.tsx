import * as React from "react";
import styles from "./SessionSchedule.module.scss";
import { ISessionScheduleProps } from "./ISessionScheduleProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./SessionSchedule.css");

export default class SessionSchedule extends React.Component<
  ISessionScheduleProps,
  {}
> {
  public render(): React.ReactElement<ISessionScheduleProps> {
    return (
      <div className={styles.sessionSchedule}>
        <div className={styles.heading}>EVENT TITLE</div>
        <div className={styles.heading}>Sessions</div>

        <div className="">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div
                className={["card-header", styles.cardHeader].join(" ")}
                id="headingOne"
              >
                <div>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      />{" "}
                      &nbsp; 20th Oct 2020
                    </button>
                  </h2>
                </div>
                <div>
                  <button type="button" className={styles.saveButton}>
                    Create Session
                  </button>{" "}
                </div>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="row my-2">
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>Session 1</h6>
                        <h6 className={styles.roomNoText}>Room no. 102</h6>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="font-weight-light">
                        <h6 className={styles.subHeadingText}>
                          9:00AM - 4:00PM
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-2 pl-0 text-right">
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className={styles.ftIcon}
                      />
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>Session 2</h6>
                        <h6 className={styles.roomNoText}>Room no. 104</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>
                          11:00AM - 4:00PM
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className={["card-header", styles.cardHeader].join(" ")}
                id="headingTwo"
              >
                <div>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      />{" "}
                      &nbsp; 21st Oct 2020
                    </button>
                  </h2>
                </div>
                <div>
                  <button type="button" className={styles.saveButton}>
                    Create Session
                  </button>{" "}
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="row my-2">
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>Session 1</h6>
                        <h6 className={styles.roomNoText}>Room no. 101</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>
                          9:00AM - 4:00PM
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className={["card-header", styles.cardHeader].join(" ")}
                id="headingThree"
              >
                <div>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      />{" "}
                      &nbsp; 22nd Oct 2020
                    </button>
                  </h2>
                </div>
                <div>
                  <button type="button" className={styles.saveButton}>
                    Create Session
                  </button>{" "}
                </div>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="row my-2">
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>Session1</h6>
                        <h6 className={styles.roomNoText}>Room no. 104</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <h6 className={styles.subHeadingText}>
                          9:00AM - 4:00PM
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={[
            "d-flex",
            "justify-content-end mt-3",
            styles.borderTop,
            "py-3",
          ].join(" ")}
        >
         
        </div> */}
      </div>
    );
  }
}
