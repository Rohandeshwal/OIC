import * as React from "react";
import styles from "./NoData.module.scss";
import { INoDataProps } from "./INoDataProps";
require("jquery/dist/jquery");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/js/bootstrap");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
// import NoDataimg from "./img/nodata.PNG";

export default class NoData extends React.Component<INoDataProps, {}> {
  public render(): React.ReactElement<INoDataProps> {
    return (
      <div className={styles.noData}>
        <div className="title font">Event Title</div>
        <div className={styles.heading}>Session Schedules</div>
        <div className={styles.headerLine}></div>
        <div className="d-flex justify-content-center">
          <div>
            {" "}
            <img src={require("./noData.png")} />
          </div>
        </div>

        <div className={styles.noDataTitle}>No results found</div>
        <div className={styles.noDataMessage}>
          The sessions you are looking for doesn't seem to be created yet
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <button type="button" className={styles.saveButton}>
              Create Session
            </button>
          </div>
        </div>
      </div>
    );
  }
}
