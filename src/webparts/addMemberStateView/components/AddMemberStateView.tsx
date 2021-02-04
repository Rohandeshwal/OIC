import * as React from "react";
import styles from "./AddMemberStateView.module.scss";
import { IAddMemberStateViewProps } from "./IAddMemberStateViewProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./AddMemberStateView.css");
import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";

export default class AddMemberStateView extends React.Component<
  IAddMemberStateViewProps,
  {}
> {
  public render(): React.ReactElement<IAddMemberStateViewProps> {
    return (
      <div className={styles.addMemberStateView}>
        <button
          type="button "
          data-toggle="modal"
          data-target="#addMemberState"
          className={styles.saveButton}
        >
          + OPEN MODAL
        </button>

        {/* MODAl */}
        <div
          className="modal fade"
          role="dialog"
          aria-labelledby="addMemberState"
          id="addMemberState"
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
                <h5 className={styles.heading}>Member State View</h5>
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
                        <p className={styles.modealLabelText}>
                          Member State Name
                        </p>
                        <p className={styles.modalNameText}>
                          Member State Name
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>
                          Date of joining OIC (YYYY)
                        </p>
                        <p className={styles.modalNameText}>2020</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>
                          National Day (DD/MM/YYYY)
                        </p>
                        <p className={styles.modalNameText}>12/12/2020</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>
                        Flag
                        </p>
                        <p className={styles.modalNameText}>
                        <img
                            src="data:image/jpeg;base64,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"
                              width="60"
                          />
                        </p>
                      </div>
                    </div>
                    <div className="row my-2">
                      <div className="col-md-12">
                        <Map
                          // mapsClassName={styles.mapHeading}
                          titleText="   Event Location"
                          coordinates={{
                            latitude: 28.565009,
                            longitude: 77.289801,
                          }}
                          zoom={50}
                        />
                      </div>
                    </div>
                    <div className="my-2">
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
