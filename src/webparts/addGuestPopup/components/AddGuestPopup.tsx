import * as React from "react";
import styles from "./AddGuestPopup.module.scss";
import { IAddGuestPopupProps } from "./IAddGuestPopupProps";
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class AddGuestPopup extends React.Component<
  IAddGuestPopupProps,
  {}
> {
  public render(): React.ReactElement<IAddGuestPopupProps> {
    return (
      <div className={styles.addGuestPopup}>
        <form>
          <div className={[styles.borderBottom, "my-3", "py-2"].join(" ")}>
            <h5 className={styles.heading}>Add Guest</h5>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="form-group">
                <label className={styles.labelHeading}>First Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="First Name"
                  id="memberstate"
                />
              </div>
            </div>
            <div className="col-md-4 pl-0">
              <div className="form-group">
                <label className={styles.labelHeading}>Middle Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Middle Name"
                  id="memberstate"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className={styles.labelHeading}>Last Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Last Name"
                  id="memberstate"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className={["form-group", "nationalDay"].join(" ")}>
                <label className={styles.labelHeading}>Organization</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <span>
                This will come from the master Data +we will have "Others".
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className={["form-group", "nationalDay"].join(" ")}>
                <label className={styles.labelHeading}>Gender</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  id="memberstate"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="phone"
                  id="memberstate"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="memberstate"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Country*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 my-2">
              <input
                name="file-upload-field"
                type="file"
                className={["form-control", styles.choose].join(" ")}
                value="Upload Photo"
              />
            </div>
            <div className="col-md-2 my-2 px-0">
              <button type="button" className={styles.uploadButton}>
                UPLOAD
              </button>
            </div>
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
            <div className="col-md-2 my-2 px-0">
              <button type="button" className={styles.uploadButton}>
                UPLOAD
              </button>
            </div>
            <div className="col-md-2 my-2 px-0">
              <button type="button" className={styles.addButton}>
                +
              </button>
            </div>
          </div>
          <div
            className={[
              "d-flex",
              "justify-content-end",
              styles.borderTop,
              "py-3",
              "my-3",
            ].join(" ")}
          >
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button type="button" className={styles.saveButton}>
              SAVE
            </button>
          </div>
        </form>
      </div>
    );
  }
}
