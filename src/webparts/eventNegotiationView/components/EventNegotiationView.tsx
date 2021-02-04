import * as React from "react";
import styles from "./EventNegotiationView.module.scss";
import { IEventNegotiationViewProps } from "./IEventNegotiationViewProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./eventNegotiationView.css");

export default class EventNegotiationView extends React.Component<
  IEventNegotiationViewProps,
  {}
> {
  public render(): React.ReactElement<IEventNegotiationViewProps> {
    return (
      <div className={styles.eventNegotiationView}>
        <button
          type="button "
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          className={styles.saveButton}
        >
          + OPEN MODAL
        </button>

        {/* MODAl */}
        <div
          className="modal fade bd-example-modal-lg"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
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
                <h5 className={styles.heading}>View Event Negociation</h5>
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
                 
                  <div className="col-md-12">
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Technical</p>
                        <p className={styles.modalNameText}>
                          Technical Details
                        </p>
                      </div>
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Attachments</p>
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                              className={styles.modalImgSize}
                            />
                          </div>
                          <div className="col-md-3">
                            <img
                              src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                              className={styles.modalImgSize}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Logistic</p>
                        <p className={styles.modalNameText}>
                        Logistic Details
                        </p>
                      </div>
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Attachments</p>
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                              className={styles.modalImgSize}
                            />
                          </div>
                          <div className="col-md-3">
                            <img
                              src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                              className={styles.modalImgSize}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Finantial</p>
                        <p className={styles.modalNameText}>
                        Finantial Details
                        </p>
                      </div>
                      <div className="col-md-12">
                        <p className={styles.modealLabelText}>Attachments</p>
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src="https://hdqwalls.com/wallpapers/best-nature-image.jpg"
                              className={styles.modalImgSize}
                            />
                          </div>
                          <div className="col-md-3">
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
