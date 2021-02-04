import * as React from "react";
import styles from "./EvetTitle.module.scss";
import { IEvetTitleProps } from "./IEvetTitleProps";
import { escape } from "@microsoft/sp-lodash-subset";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class EvetTitle extends React.Component<IEvetTitleProps, {}> {
  public render(): React.ReactElement<IEvetTitleProps> {
    return (
      <div className={styles.evetTitle}>
        <div className={styles.heading}>EVENT TITLE</div>
        <label className={styles.labelHeading}> Upload Icon</label>
        <div className="row">
          <div className="col-md-8 my-2">
            <input
              name="file-upload-field"
              type="file"
              className={["form-control", styles.choose].join(" ")}
              value="Upload Icon"
            />
          </div>
          <div className="col-md-2 my-2 px-0">
            <button type="button" className={styles.uploadButton}>
              UPLOAD
            </button>
          </div>
        </div>
        <div className="form-group">
          <label className={styles.labelHeading}> Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
          ></textarea>
        </div>
        <div
          className={[
            "d-flex",
            "justify-content-end",
            "my-3",
            "py-3",
            styles.borderTop,
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
