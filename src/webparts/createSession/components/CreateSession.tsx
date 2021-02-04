import * as React from "react";
import styles from "./CreateSession.module.scss";
import { ICreateSessionProps } from "./ICreateSessionProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class CreateSession extends React.Component<
  ICreateSessionProps,
  {}
> {
  handleinputField(e, ID) {
    console.log("event value is:", e);
    let isInput = e.target.checked;
    console.log("checkbox checked:", isInput);
    let fieldId = document.getElementById(ID);
    if (isInput === true) {
      fieldId.style.display = "none";
    } else {
      fieldId.style.backgroundColor = "block";
    }
  }

  classRefs;
  constructor(props) {
    super(props);
    this.classRefs = this;
    this.state = {
      items: [
        {
          docs: "",
        },
      ],
    };
  }

  addUrl(that) {
    console.log("hbefore", that.state.items);
    that.state.items.push({
      docs: "",
    });
    console.log("after", that.state.items);
  }
  removeUrl(that) {
    that.state.items.splice(that, 1);
  }

  public render(): React.ReactElement<ICreateSessionProps> {
    return (
      <div className={styles.createSession}>
        <div className={[styles.borderBottom, "my-3", "py-2"].join(" ")}>
          <h5 className={styles.heading}>Create Session</h5>
        </div>
        <div className="mt-2">
          <form action="">
            <div className="row">
              <div className="col-8 form-group ">
                <label className={styles.labelHeading}>Create Session</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Session name"
                  id="name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label className={styles.labelHeading}>Session Date</label>
                  <input
                    type="date"
                    // onClick={(e) => this.handleinputField(e, 1)}
                    className="form-control"
                    placeholder="Select Date"
                  />
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <span>
                  This date should be validated based on event date range.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-8 form-group ">
                <label className={styles.labelHeading}>Session Location</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Event title"
                  id="name"
                />
              </div>
            </div>

            <div className="">
              {this.classRefs.state.items.map((item, index) => {
                return (
                  <div className="row">
                    <div className="col-md-4 form-group ">
                      <label className={styles.labelHeading}>Agenda </label>
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Agenda name"
                        id="name"
                      />{" "}
                    </div>
                    <div className="col-md-2 form-group ">
                      <label className={styles.labelHeading}>Start Time</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="" disabled selected hidden>
                          Time
                        </option>
                        <option>9:00AM</option>
                        <option>9:00AM</option>
                        <option> 9:00AM</option>
                        <option>9:00AM</option>
                      </select>
                    </div>
                    <div className="col-md-2 form-group ">
                      <label className={styles.labelHeading}>End Time</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="" disabled selected hidden>
                          Time
                        </option>
                        <option> 2:0AM</option>
                        <option>9:00AM</option>
                        <option> 9:00AM</option>
                        <option>9:00AM</option>
                      </select>
                    </div>
                    <div className="col-md-2 form-group ">
                      <label className={styles.labelHeading}>Speaker</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option value="" disabled selected hidden>
                          Speaker
                        </option>
                        <option>Time Zone 2</option>
                        <option>Time Zone 3</option>
                        <option> Time Zone 4</option>
                        <option>Time Zone 5</option>
                      </select>
                    </div>
                    <div className="col-2 justify-content-between d-flex icon-position m-auto">
                      {index > 0 ? (
                        <div>
                          <button
                            type="button"
                            className={styles.action}
                            onClick={() => this.removeUrl(this)}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className={styles.ftIcon}
                            />
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <div>
                        <button
                          type="button"
                          className={styles.action}
                          onClick={() => this.addUrl(this)}
                        >
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            className={styles.ftIcon}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
        <div
          className={[
            "d-flex",
            "justify-content-end mt-2",
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
