import * as React from 'react';
import styles from './OicMemberDetailsPopup.module.scss';
import { IOicMemberDetailsPopupProps } from './IOicMemberDetailsPopupProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class OicMemberDetailsPopup extends React.Component<IOicMemberDetailsPopupProps, {}> {
  public render(): React.ReactElement<IOicMemberDetailsPopupProps> {
    return(
      <div className={styles.oicMemberDetailsPopup}>
       <form>
          <div className={[styles.borderBottom, "my-3", "py-2"].join(' ')}>
            <h5 className={styles.heading}>
              OIC Member Details
            </h5>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="form-group">
                <label className={styles.labelHeading}>First Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="First Name"
                  id="memberstate"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className={styles.labelHeading}>Middle Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Middle Name"
                  id="memberstate"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className={styles.labelHeading}>Last Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Last Name"
                  id="memberstate"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Location*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>DEpartment*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Official Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  id="memberstate"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Direct Phone no*</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="phone no"
                  id="memberstate"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Gender*</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label className={styles.labelHeading}>Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  id="memberstate"
                />
              </div>
            </div>
          </div>

          <div className="row"> 
                <div className="col-md-8 my-2">
                    <input
                      name="file-upload-field"
                      type="file"
                      className={["form-control", styles.choose].join(' ')}
                      value="Upload Photo"
                    />
                </div>
                <div className="col-md-2 my-2 px-0">
                <button type="button" className={styles.uploadButton}> 
                  UPLOAD
                </button>
                </div>
                </div>
                <div className="row"> 
                <div className="col-md-8 my-2">
                    <input
                      name="file-upload-field"
                      type="file"
                      className={["form-control", styles.choose].join(' ')}
                      value="Attachements"
                    />
                </div>
                <div className="col-md-2 my-2 px-0">
                <button type="button" className={styles.uploadButton}> 
                  UPLOAD
                </button>
                </div>
                <div className="col-md-2 my-2 px-0">
                <button type="button" className={styles.addButton}>
                  +
                </button>
                </div>
                </div>
          <div
             className={[ "d-flex", "justify-content-end", styles.borderTop, "py-3", "my-3"].join(' ')}
          >
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
