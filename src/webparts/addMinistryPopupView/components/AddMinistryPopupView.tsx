import * as React from 'react';
import styles from './AddMinistryPopupView.module.scss';
import { IAddMinistryPopupViewProps } from './IAddMinistryPopupViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class AddMinistryPopupView extends React.Component<IAddMinistryPopupViewProps, {}> {
  public render(): React.ReactElement<IAddMinistryPopupViewProps> {
    return(
      <div className={styles.addMinistryPopupView}>
      <button
        type="button "
        data-toggle="modal"
        data-target="#addMinistryPopupView"
        className={styles.saveButton}
      >
        + OPEN MODAL
      </button>

      {/* MODAl */}
      <div
        className="modal fade"
        id="addMinistryPopupView"
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
              <h5 className={styles.heading}>View Add Ministry</h5>
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
                      <p className={styles.modealLabelText}>Ministry Name*</p>
                      <p className={styles.modalNameText}>
                      Ministry Name*
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Official Email ID</p>
                      <p className={styles.modalNameText}>Sample@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                      <p className={styles.modealLabelText}>Official Phone Number*</p>
                      <p className={styles.modalNameText}>+966-515-5589-91</p>
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
                      <p className={styles.modealLabelText}>City</p>
                      <p className={styles.modalNameText}>CityName</p>
                    </div>
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
   
      // <div className={styles.addMinistryPopupView}>
      //   <div className={styles.container}>
      //     <div className={styles.row}>
      //       <div className={styles.column}>
      //         <span className={styles.title}>Welcome to SharePoint!</span>
      //         <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
      //         <p className={styles.description}>{escape(this.props.description)}</p>
      //         <a href='https://aka.ms/spfx' className={styles.button}>
      //           <span className={styles.label}>Learn more</span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div >
    );
  }
}
