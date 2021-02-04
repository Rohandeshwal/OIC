import * as React from "react";
import styles from "./SessionDetailsPopup.module.scss";
import { ISessionDetailsPopupProps } from "./ISessionDetailsPopupProps";
import { escape } from "@microsoft/sp-lodash-subset";
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class SessionDetailsPopup extends React.Component<
  ISessionDetailsPopupProps,
  {}
> {
  public render(): React.ReactElement<ISessionDetailsPopupProps> {
    const headingText = {
      fontSize: "18px",
      fontFamily: "Arial"
    };

    const subHeadingText = {
      fontSize: "14px",
      color: "#2699FB",
      fontFamily: "Arial"
    };

    const tileStyle= {
      borderBottom: "3px solid gray",
      fontFamily: "Arial"
    }
    return (
      <div className={styles.sessionDetailsPopup}>
        <div className="d-flex justify-content-between align-items-center" style={tileStyle}>
          <div>
            <h4>Sessions Name</h4>
          </div>
          <div className="d-flex align-items-baseline">
           <button className="btn btn-link"> <img src="https://www.flaticon.com/svg/static/icons/svg/61/61456.svg" alt="edit icon" width="12" /> </button>
            <h6 style={subHeadingText}>EDIT SESSION</h6>
          </div>
        </div>

        <div className="d-flex flex-column my-2">
          <div>
            <h5 style={headingText}>Session Date</h5>
          </div>
          <div>
            <h6 style={subHeadingText}>20th oct 2020</h6>
          </div>
        </div>

        <div className="d-flex flex-column my-2">
          <div className="">
            <h5 style={headingText}>Session Location</h5>
          </div>
          <div className="">
            <h6 style={subHeadingText}>Room 101</h6>
          </div>
        </div>
        <div className="d-flex flex-column my-2">
          <div className="">
            <h5 style={headingText}>Agenda</h5>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>Welcome Speech</h6>
              <h6 style={subHeadingText}>Speaker 1</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>9AM - 9:30AM</h6>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>Agenda 1</h6>
              <h6 style={subHeadingText}>Speaker 2</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>9AM - 9:30AM</h6>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>Lunch Break</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>9AM - 9:30AM</h6>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>Agenda 2</h6>
              <h6 style={subHeadingText}>Speaker 3</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h6 style={subHeadingText}>9AM - 9:30AM</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
