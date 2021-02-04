import * as React from "react";
import styles from "./EventNegotiation.module.scss";
import { IEventNegotiationProps } from "./IEventNegotiationProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
// import css from "./EventNegotiation.css";
require("./EventNegotiation.css");
export default class EventNegotiation extends React.Component<
  IEventNegotiationProps,
  {}
> {
  public render(): React.ReactElement<IEventNegotiationProps> {
    return (
      <div className={styles.eventNegotiation}>
        <div className="title font">EVENT TITLE</div>
        <div className={styles.heading}>Event Negotiation</div>

        <div className="">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div
                className={["card-header", styles.cardHeader].join(" ")}
                id="headingOne"
              >
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
                    &nbsp; Technical
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-8 my-2">
                      <input
                        name="file-upload-field"
                        type="file"
                        className={["form-control", styles.choose].join(" ")}
                        value="Attachements"
                      />
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
                    &nbsp; Logistic
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-8 my-2">
                      <input
                        name="file-upload-field"
                        type="file"
                        className={["form-control", styles.choose].join(" ")}
                        value="Attachements"
                      />
                    </div>
                    <div className="col-md-2 my-2">
                      <button type="button" className={styles.uploadButton}>
                        UPLOAD
                      </button>
                    </div>
                    <div className="col-md-2 my-2">
                      <button type="button" className={styles.addButton}>
                        +
                      </button>
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
                    &nbsp; Financial
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-8 my-2">
                      <input
                        name="file-upload-field"
                        type="file"
                        className={["form-control", styles.choose].join(" ")}
                        value="Attachements"
                      />
                    </div>
                    <div className="col-md-2 my-2">
                      <button type="button" className={styles.uploadButton}>
                        UPLOAD
                      </button>
                    </div>
                    <div className="col-md-2 my-2">
                      <button type="button" className={styles.addButton}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={[
            "d-flex",
            "justify-content-end mt-3",
            styles.borderTop,
            "py-3",
          ].join(" ")}
        >
          <button type="button" className={styles.cancelButton}>
            Cancel
          </button>
          <button type="button" className={styles.saveButton}>
            SAVE
          </button>
        </div>
      </div>
    );
  }
}
