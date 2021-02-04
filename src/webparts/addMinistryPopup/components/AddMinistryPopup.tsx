import * as React from 'react';
import styles from './AddMinistryPopup.module.scss';
import { IAddMinistryPopupProps } from './IAddMinistryPopupProps';
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");


export default class AddMinistryPopup extends React.Component<IAddMinistryPopupProps, {}> {
  public render(): React.ReactElement<IAddMinistryPopupProps> {
  
    return(
      <div className={styles.addMinistryPopup}> 
       <form> 
         <div className={[styles.borderBottom, "my-3", "py-2"].join(' ')}>
         <h5 className={styles.heading}>Ministry Details</h5>
         </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Ministry Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ministry Name"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Official Email Id*</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Official Email Id"
                      id="emailID"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Official Phone No*</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Official Phone No"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>City*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Website URL</label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Website URL"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Google Map URL</label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Google Map URL"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label className={styles.labelHeading}>Member State Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member State Name"
                      id="memberstate"
                    />
                  </div>
                </div>
                </div>
                <div  className={[ "d-flex", "justify-content-end", styles.borderTop, "py-3"].join(' ')}>
                <button type="button" className={styles.cancelButton}>
                  Cancel
                </button>
                <button type="button" className={styles.saveButton}>
                  SAVE
                </button>
                
              </div>
                </form>
      </div >
    );
  }
}
