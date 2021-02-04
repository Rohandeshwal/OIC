import * as React from 'react';
import styles from './ViewVisaUpload.module.scss';
import { IViewVisaUploadProps } from './IViewVisaUploadProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require('./ViewVisaUpload.css');

export default class ViewVisaUpload extends React.Component<IViewVisaUploadProps, {}> {
  public render(): React.ReactElement<IViewVisaUploadProps> {
    return(
      <div className={styles.viewVisaUpload}>
      <button
        type="button "
        data-toggle="modal"
        data-target="#VisaViewupload"
        className={styles.saveButton}
      >
        + OPEN MODAL
      </button>

      {/* MODAl */}
      <div
        className="modal fade"
        id="VisaViewupload"
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
              <h5 className={styles.heading}>Upload Visa Document</h5>
              <button
                type="button"
                className={["ml-auto", styles.cancelButton].join(' ')}
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
                    <div className="col-md-4">
                    <p className={styles.modealLabelText}>Document Name</p>
                      <p className={styles.modalNameText}>Document1</p>
                    </div>                  
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                    <p className={styles.modealLabelText}>Document Description</p>
                    <p className={styles.modalNameText}>Document Description</p>
                    </div>
                  </div>
              
                  <div className="row my-2">                   
                    <div className="col-md-4">
                    <p className={styles.modealLabelText}>Language</p>
                    <p className={styles.modalNameText}>Arabic</p>
                    </div>
                  </div>
                  <div className="my-2">
                  <p className={styles.modealLabelText}>Uploaded Documents</p>
                  <div className="row">
                    <div className="col-md-4">
                    <img src="https://hdqwalls.com/wallpapers/best-nature-image.jpg" className={styles.modalImgSize} />
                    </div>
                    <div className="col-md-4">
                    <img src="https://hdqwalls.com/wallpapers/best-nature-image.jpg" className={styles.modalImgSize} />
                    </div>
                
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
            </div>
          </div>
        </div>
      </div>
    </div>    
   
    );
  }
}
