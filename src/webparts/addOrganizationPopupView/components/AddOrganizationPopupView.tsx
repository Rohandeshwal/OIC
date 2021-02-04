import * as React from 'react';
import styles from './AddOrganizationPopupView.module.scss';
import { IAddOrganizationPopupViewProps } from './IAddOrganizationPopupViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class AddOrganizationPopupView extends React.Component<IAddOrganizationPopupViewProps, {}> {
  public render(): React.ReactElement<IAddOrganizationPopupViewProps> {
    return(
      <div className={styles.addOrganizationPopupView}>
      <button
        type="button "
        data-toggle="modal"
        data-target="#addOrganizationPopupView"
        className={styles.saveButton}
      >
        + OPEN MODAL
      </button>

      {/* MODAl */}
      <div
        className="modal fade"
        id="addOrganizationPopupView"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div
          className={["modal-dialog", styles.modalDialog].join(" ")}
          role="document"
        >
          <div className={["modal-content", styles.modalContent].join(" ")}>
            <div className={["modal-header", styles.modalHeader].join(" ")}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                data-dismiss="modal"
                className={styles.ftIcon}
              />
              <h5 className={styles.heading}>View Add Organization</h5>
              <button
                type="button"
                className={["ml-auto", styles.cancelButton].join(" ")}
                data-dismiss="modal"
                aria-label="Close"
              >
                EDIT
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-9">
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <p className={styles.modealLabelText}>Orginsation Name</p>
                      <p className={styles.modalNameText}>
                      Organisation1
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Organisation Type</p>
                      <p className={styles.modalNameText}>OrganisationType1</p>
                    </div>
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Official Email ID</p>
                      <p className={styles.modalNameText}>Sample@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>
                      Official Fax Number
                      </p>
                      <p className={styles.modalNameText}>+966-515-5589-91</p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Country</p>
                      <p className={styles.modalNameText}>CountryName</p>
                    </div>
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>City</p>
                      <p className={styles.modalNameText}>CityName</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <p className={styles.modealLabelText}>Address</p>
                      <p className={styles.modalNameText}>
                      Address1
                      </p>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Website URL</p>
                      <p className={styles.modalNameText}>Website URL</p>
                    </div>
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Google Map URL</p>
                      <p className={styles.modalNameText}>Google Map URL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
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
