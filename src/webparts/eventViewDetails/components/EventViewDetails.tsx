import * as React from "react";
import styles from "./EventViewDetails.module.scss";
import { IEventViewDetailsProps } from "./IEventViewDetailsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";

require("jquery/dist/jquery");

require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class EventViewDetails extends React.Component<
  IEventViewDetailsProps,
  {}
> {
  public render(): React.ReactElement<IEventViewDetailsProps> {
    return (
      <div className={styles.eventViewDetails}>
        <div className={styles.borderBottom}>
          <div>
            {" "}
            <h5 className={styles.heading}>Event Title</h5>
          </div>
          <div className="mb-4">
            <span className="font-weight-bold">Date: </span>{" "}
            <span className="">
              12-Dec-2020 <span className="font-weight-bold">(to)</span>{" "}
              18-Dec-2020
            </span>
            <span className={styles.time}>Time: </span>{" "}
            <span className="">9:00am - 8:00pm </span>
          </div>
        </div>
        <div>
          <div className="image mt-4">
            <div className={styles.imgPart}>
              <div className={styles.image}>
                <img
                  src="https://www.aljazeera.com/wp-content/uploads/2019/05/bfaa3028d16c48ecaf4dfcc7cf34f0f4_18.jpeg?fit=998%2C562"
                  alt="Avatar"
                />
              </div>
              <div className={styles.bottomRight}>
                <button type="button" className={styles.cancelButton}>
                  LOCATION
                </button>
              </div>
            </div>
          </div>
          <div className={styles.smallDescription}>
            <h5 className={styles.smallDescriptionHeading}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </h5>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h5 className={styles.smallDescriptionHeading}> Description </h5>
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500.
              </p>
            </div>
            <div className="col-md-6">
              <Map
                mapsClassName={styles.mapHeading}
                titleText="   Event Location"
                coordinates={{ latitude: 28.565009, longitude: 77.289801 }}
                zoom={15}
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-6">
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500.
              </p>
            </div>
            <div className="col-6 pl-0">
              <div>
                <h3 className={styles.Address1}>Dream World Wide</h3>
                <p className={styles.Address2}>Ibn Hadryha Road</p>
                <p className={styles.Address3}>Dammam - 32211</p>
                <p className={styles.latLong}>30°15′20″ N </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className={styles.Address1}>Date & Time </h3>
            <p className={styles.dateText}>12/11/2020 - 11/22/2021</p>
            <p className={styles.dateText}>9:00 AM - 11:00 AM</p>
          </div>
        </div>
      </div>
    );
  }
}
