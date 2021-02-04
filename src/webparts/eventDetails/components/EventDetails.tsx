import * as React from "react";
import styles from "./EventDetails.module.scss";
import { IEventDetailsProps } from "./IEventDetailsProps";
import { escape } from "@microsoft/sp-lodash-subset";
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class EventDetails extends React.Component<
  IEventDetailsProps,
  {}
> {
  public render(): React.ReactElement<IEventDetailsProps> {
    return (
      <div className={styles.eventDetails}>
        <div className={styles.heading}>EVENT TITLE</div>
        <div className={styles.eventDetailsCard}>
          <div className="row">
            <div className="col-12">
              <div className={styles.card}>
                <div className={styles.imgPart}>
                  <div className={styles.image}>
                    <img
                      src="https://www.aljazeera.com/wp-content/uploads/2019/05/bfaa3028d16c48ecaf4dfcc7cf34f0f4_18.jpeg?fit=998%2C562"
                      alt="Avatar"
                    />
                  </div>
                  <div className={styles.bottomleft}>
                    Start Date : Start Time - End Date : End Time
                  </div>
                  <div className={styles.bottomRight}>Host Country Name</div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardBetween}>
                    <div>
                      <div className={styles.cardHeading}>
                        Lorem ipsum is simply dummy text
                      </div>
                    </div>
                    <div>
                      <a href="#">Google Map link</a>
                    </div>
                  </div>

                  <p>
                    <h6>Venue location, Address, City, Country</h6>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
