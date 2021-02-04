import * as React from "react";
import styles from "./UploadVisaDocument.module.scss";
import { IUploadVisaDocumentProps } from "./IUploadVisaDocumentProps";
import { escape } from "@microsoft/sp-lodash-subset";

require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class UploadVisaDocument extends React.Component<
  IUploadVisaDocumentProps,
  {}
> {
  public render(): React.ReactElement<IUploadVisaDocumentProps> {
    return (
      <div className={styles.uploadVisaDocument}>
        <div className={styles.textHeading}>Upload Visa Documents</div>

        <form action="UploadForm" className={styles.uploadForms}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label className={styles.labelHeading}>Document Name*</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Document Name"
                  id="name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label className={styles.labelHeading}>Language*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" disabled selected hidden>
                    Select Language
                  </option>
                  <option>Language 2</option>
                  <option>Language 3</option>
                  <option> Language 4</option>
                  <option>Language 5</option>
                </select>
              </div>
            </div>
          </div>
          <label className={styles.labelHeading}>Documents*</label>
          <div className="row">
            <div className="col-md-8 my-2">
              <input
                name="file-upload-field"
                type="file"
                className={["form-control", styles.choose].join(" ")}
                value="Upload document"
              />
            </div>
            <div className="col-md-2 my-2">
              <button type="button" className={styles.saveButton}>
                UPLOAD
              </button>
            </div>
          </div>
          <div className="form-group">
            <label className={styles.labelHeading}>Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Description"
            ></textarea>
          </div>
          <div
            className={[ "d-flex", "justify-content-end", styles.borderTop, "py-3", "my-3"].join(' ')}>
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
