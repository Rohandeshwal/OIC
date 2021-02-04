import * as React from "react";
import styles from "./CreateEvents.module.scss";
import { ICreateEventsProps } from "./ICreateEventsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";
import Select from "react-select-plus";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Be sure to include styles at some point, probably during your bootstrapping
import "react-select-plus/dist/react-select-plus.css";
require("jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./CreateEvents.css");

export default class CreateEvents extends React.Component<
  ICreateEventsProps,
  {}
> {
  public render(): React.ReactElement<ICreateEventsProps> {
    var options = [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
    ];

    function logChange(val) {
      console.log("Selected: " + val);
    }

    return (
      <div className={styles.createEvents}>
        <div className={[styles.borderBottom, "my-3", "py-2"].join(" ")}>
          <h5 className={styles.heading}>Create Event</h5>
          <h6 className={styles.basicInfo}>BASIC INFO</h6>
        </div>
        <div className="mainBody mt-2">
          <form action="CreateEvent">
            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label className={styles.labelHeading}>Event Title</label>
                  <input
                    type="name"
                    disabled
                    className="form-control"
                    placeholder="Event title"
                    id="name"
                  />
                </div>
              </div>
              <div className="col-md myselect">
                <div className="form-group ">
                  <label className={styles.labelHeading}>Host Country</label>
                  <select
                    disabled
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="" disabled selected hidden>
                      Select Member State
                    </option>
                    <option>Member State 2</option>
                    <option>Member State 3</option>
                    <option> MemberState 4</option>
                    <option>Member State 5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md myselect">
                <div className="form-group">
                  <label className={styles.labelHeading}>Event Category</label>
                  <select
                    disabled
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="" disabled selected hidden>
                      Event Category
                    </option>
                    <option>Time Zone 2</option>
                    <option>Time Zone 3</option>
                    <option> Time Zone 4</option>
                    <option>Time Zone 5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md myselect">
                <div className={["form-group", styles.selects].join(" ")}>
                  <label className={styles.labelHeading}>Member State</label>
                  <Select
                    disabled
                    name="form-field-name"
                    value="one"
                    multi
                    options={options}
                    onChange={logChange}
                  />
                </div>
              </div>
            </div>
            <h6 className={styles.basicInfo}>DATE&TIME</h6>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className={styles.labelHeading}>Start Date</label>

                  <input type="date" disabled className="form-control" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className={styles.labelHeading}>Start Time</label>
                  <input
                    disabled
                    type="text"
                    placeholder="Start time"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-md-3">
                {" "}
                <div className="form-group">
                  <label className={styles.labelHeading}>End Date</label>

                  <input type="date" disabled className="form-control" />
                </div>
              </div>

              <div className="col-md-3 ">
                {" "}
                <div className="form-group">
                  <label className={styles.labelHeading}>End Time</label>

                  <input
                    type="name"
                    disabled
                    className="form-control"
                    placeholder="Event title"
                    id="name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md myselect">
                <div className="form-group">
                  <label className={styles.labelHeading}>Time Zone</label>
                  <select
                    disabled
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="" disabled selected hidden>
                      Select Time Zone
                    </option>
                    <option>Time Zone 2</option>
                    <option>Time Zone 3</option>
                    <option> Time Zone 4</option>
                    <option>Time Zone 5</option>
                  </select>
                </div>
              </div>
            </div>
            <h6 className={styles.basicInfo}>LOCATION</h6>
            <div className="form-group">
              <div className={styles.labelHeading}>Location type</div>

              <div className="d-flex">
                {" "}
                <div className="form-check-label">
                  <label
                    className={[styles.labelHeading, "labelContainer"].join(
                      " "
                    )}
                  >
                    Physical
                    <input type="radio" checked disabled name="radio" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="form-check-label">
                  <label
                    className={[styles.labelHeading, "labelContainer"].join(
                      " "
                    )}
                  >
                    Virtual
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className={styles.labelHeading}>Venue Name</label>
              <input
                disabled
                type="name"
                className="form-control"
                placeholder="Venue name"
                id="name"
              />
            </div>
            <div className="form-group">
              <label className={styles.labelHeading}>Address</label>
              <input
                disabled
                type="name"
                className="form-control"
                placeholder="Enter full address"
                id="name"
              />
            </div>
            <div className="row">
              <div className="col-md myselect">
                <div className="form-group">
                  <label className={styles.labelHeading}>City</label>
                  <select
                    disabled
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="" disabled selected hidden>
                      Select City
                    </option>
                    <option>City 2</option>
                    <option>City 3</option>
                    <option> City 4</option>
                    <option>City 5</option>
                  </select>
                </div>
              </div>
              <div className="col-md myselect">
                <div className="form-group">
                  <label className={styles.labelHeading}>State</label>
                  <select
                    className="form-control"
                    disabled
                    id="exampleFormControlSelect1"
                  >
                    <option value="" disabled selected hidden>
                      Select State
                    </option>
                    <option> State 2</option>
                    <option> State 3</option>
                    <option> State 4</option>
                    <option> State 5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md myselect">
                <div className="form-group">
                  <label className={styles.labelHeading}>Country</label>
                  <select
                    disabled
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="" disabled selected hidden>
                      Select Country
                    </option>
                    <option>Country 2</option>
                    <option>Country 3</option>
                    <option> Country 4</option>
                    <option>Country 5</option>
                  </select>
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label className={styles.labelHeading}>Pincode</label>
                  <input
                    disabled
                    type="name"
                    className="form-control"
                    placeholder="Select pincode"
                    id="name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label className={styles.labelHeading}>Latitude</label>
                  <input
                    disabled
                    type="name"
                    className="form-control"
                    placeholder="latitude"
                    id="name"
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label className={styles.labelHeading}>Longitude</label>
                  <input
                    disabled
                    type="name"
                    className="form-control"
                    placeholder="Longitude"
                    id="name"
                  />
                </div>
              </div>
            </div>
            <div>
              <Map
                titleText="Map"
                coordinates={{ latitude: 28.565009, longitude: 77.289801 }}
                zoom={15}
              />
            </div>
          </form>
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
              EDIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
