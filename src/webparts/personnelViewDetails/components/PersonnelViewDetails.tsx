import * as React from "react";
import styles from "./PersonnelViewDetails.module.scss";
import { IPersonnelViewDetailsProps } from "./IPersonnelViewDetailsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./PersonnelViewDetails.css");
export default class PersonnelViewDetails extends React.Component<
  IPersonnelViewDetailsProps,
  {}
> {
  public render(): React.ReactElement<IPersonnelViewDetailsProps> {
    return (
      <div className={styles.personnelViewDetails}>
        <button
          type="button "
          data-toggle="modal"
          data-target="#personalViewDetails"
          className={styles.saveButton}
        >
          + OPEN MODAL
        </button>

        {/* MODAl */}
        <div
          className="modal fade"
          role="dialog"
          aria-labelledby="personalViewDetails"
          id="personalViewDetails"
          aria-hidden="true"
        >
          <div
            className={["modal-dialog  modal-lg", styles.modalDialog].join(" ")}
            role="document"
          >
            <div className={["modal-content", styles.modalContent].join(" ")}>
              <div className={["modal-header", styles.modalHeader].join(" ")}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  data-dismiss="modal"
                  className={styles.ftIcon}
                />
                <h5 className={styles.heading}>View Personnel Details</h5>
                <button
                  type="button"
                  className={["ml-auto", styles.cancelButton].join(" ")}
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  EDIT
                </button>
              </div>
              <div className={["modal-body", styles.modalBody].join(" ")}>
                <div className="row">
                  <div className="col-md-3 my-3">
                    <img
                      src="http://peoplesmedicalcare.org/wp-content/uploads/2017/12/dummy-profile-img.jpg"
                      className={styles.modalProfileImgSize}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Full Name</p>
                        <p className={styles.modalNameText}>
                          First name Middle Name Last Name
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Member State</p>
                        <p className={styles.modalNameText}>Member State</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>
                          Offical Email ID
                        </p>
                        <p className={styles.modalNameText}>Sample@gmail.com</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>
                          Direct Phone number
                        </p>
                        <p className={styles.modalNameText}>+966-515-5589-91</p>
                      </div>
                    </div>
                    <div className="row my-2">
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Gender</p>
                        <p className={styles.modalNameText}>Male</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Job Title</p>
                        <p className={styles.modalNameText}>Your job title</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>User type</p>
                        <p className={styles.modalNameText}>Focal Point User</p>
                      </div>
                    </div>
                    <div className="my-2">
                      <p className={styles.modealLabelText}>Attachments</p>
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                            className={styles.modalImgSize}
                          />
                        </div>
                        <div className="col-md-4">
                          <img
                            src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                            className={styles.modalImgSize}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={["modal-footer", styles.modalFooter].join(" ")}>
                <button
                  type="button"
                  data-dismiss="modal"
                  className={styles.cancelButton}
                >
                  CLOSE
                </button>
                {/* <button type="button" className={styles.saveButton}>
                  SAVE
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
