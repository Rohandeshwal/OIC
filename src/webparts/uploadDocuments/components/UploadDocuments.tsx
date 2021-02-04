import * as React from "react";
import styles from "./UploadDocuments.module.scss";
import { IUploadDocumentsProps } from "./IUploadDocumentsProps";
import { escape } from "@microsoft/sp-lodash-subset";
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class UploadDocuments extends React.Component<
  IUploadDocumentsProps,
  {}
> {
  public render(): React.ReactElement<IUploadDocumentsProps> {
    return (
      <div className={styles.uploadDocuments}>
        <div className={styles.textHeading}>Upload Documents</div>

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
            <div className="col">
              <div className="form-group">
                <label className={styles.labelHeading}>Member State*</label>
                <select className="form-control" id="exampleFormControlSelect1">
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
            <div className="col">
              <div className="form-group">
                <label className={styles.labelHeading}>Document type*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" disabled selected hidden>
                    Select document type
                  </option>
                  <option>Document Type 2</option>
                  <option>Document Type 3</option>
                  <option> Document Type 4</option>
                  <option>Document Type 5</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className={styles.labelHeading}>Speaker*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" disabled selected hidden>
                    Select speaker
                  </option>
                  <option>speaker 2</option>
                  <option>speaker 3</option>
                  <option> speaker 4</option>
                  <option>speaker 5</option>
                </select>
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
          <div className={styles.publishedContents}>
            <div className="form-group">
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
              </label>
              <span className={styles.sliderContent}>Published to website</span>
              <div className={styles.Content}>
                If selected yes,this document will be published to website once
                the event is completed
              </div>
            </div>
            <div className={styles.buttonConatainer}>
              <button type="button" className={styles.button}>
                SAVE
              </button>
              <button type="button" className={styles.button}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
