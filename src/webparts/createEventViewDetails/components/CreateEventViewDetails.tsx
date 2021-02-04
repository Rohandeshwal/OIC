import * as React from 'react';
import styles from './CreateEventViewDetails.module.scss'; 
import { ICreateEventViewDetailsProps } from './ICreateEventViewDetailsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
import { Map} from "@pnp/spfx-controls-react/lib/Map";

export default class CreateEventViewDetails extends React.Component<ICreateEventViewDetailsProps, {}> {
  public render(): React.ReactElement<ICreateEventViewDetailsProps> {
    return(
      <div className={styles.createEventViewDetails}>
 <button
          type="button "
          data-toggle="modal"
          data-target="#createEventViewDetails"
          className={styles.saveButton} 
        >
          + OPEN MODAL
        </button>

        {/* MODAl */}
        <div
          className="modal fade"
          role="dialog"
          aria-labelledby="createEventViewDetails"
          id="createEventViewDetails"
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
                <h5 className={styles.heading}>Event Details</h5>
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
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Event Title</p>
                        <p className={styles.modalNameText}>
                        Event full length title comes here
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Host Country</p>
                        <p className={styles.modalNameText}>Select host country</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>
                        Location type
                        </p>
                        <p className={styles.modalNameText}>Physical</p>
                      </div>
                    </div>


                    <div className="row mt-2">
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Member state(s)</p>
                        <p className={styles.modalNameText}>State 1</p>
                      </div>
                    </div>


                    <div className="row my-2">
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Start Date & Time</p>
                        <p className={styles.modalNameText}>17/11/2020, 09:00:00 (AM)</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>End Date & Time</p>
                        <p className={styles.modalNameText}>17/11/2020, 09:00:00 (AM)</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Time Zone</p>
                        <p className={styles.modalNameText}>Time zone in Saudi Arabia (GMT+3)</p>
                      </div>
                    </div>

                    <div className="row my-2">
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Venue Name</p>
                        <p className={styles.modalNameText}>Enter venue name</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Address</p>
                        <p className={styles.modalNameText}>Ibn Khaldun Plaza, Abo Hadryha Road, Abo Hadryha Road, Dammam - 32211</p>
                      </div>
                      <div className="col-md-4">
                        <p className={styles.modealLabelText}>Latitude, Longitude</p>
                        <p className={styles.modalNameText}>26.4207° N, 50.0888° E</p>
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
      </div >
    );
  }
}
