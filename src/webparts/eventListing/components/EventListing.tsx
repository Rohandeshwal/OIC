import $ from "jquery";
import * as React from "react";
import styles from "./EventListing.module.scss";
import { IEventListingProps } from "./IEventListingProps";
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
// require("../../../../node_modules/font-awesome/css/font-awesome.css");
// require("../../../../node_modules/font-awesome/css/font-awesome.min.css");
require("./EventListing.css");
export default class EventListing extends React.Component<
  IEventListingProps,
  {}
> {
  // JSON Event Listing

  mainRefs;
  constructor(props) {
    super(props);
    this.mainRefs = this;
    this.state = { items: [] };
  }
  componentDidMount() {
    this.getEventDetails();
    this.EventFilterHostCountry();
    this.getEventHostCountry();
  }

  public EventFilterHostCountry() {
    // debugger;
    var reactHandler = this;
    var vHostCountry = document.getElementById("ddlCounty")["value"];
    $.ajax({
      url: "http://180.151.86.53:90/api/Event/EventFilterHostCountry/",
      method: "GET",
      crossDomain: true,
      async: false,
      cache: false,
      dataType: "json",
      data: {
        HostCountryName: vHostCountry,
        Flag1: "",
        Flag2: "",
      },
      beforeSend: function () {},
      success: function (data) {
        var vhtml = "<div class='row'>";
        for (var i = 0; i < data.length; i++) {
          vhtml +=
            "<div class='col-md-3 col-lg-3'" +
            " " +
            "key=" +
            i +
            ">" +
            "<div class=card" +
            " " +
            "id=" +
            data[i].ID +
            ">" +
            "<div class=imgPart>" +
            "<div class=image>" +
            "<a href=" +
            data[i].NewPageURL +
            ">" +
            "<img   class=img rc='" +
            data[i].EventLogoURL +
            "'/></a>" +
            "</div>" +
            "</div>" +
            "<div class=bottomleft > " +
            data[i].StartDate +
            " - " +
            data[i].EndDate +
            "</div>" +
            "<div class=cardBody>" +
            "<div class=cardBetween>" +
            "<div class=cardHeading>" +
            data[i].Title +
            "</div>" +
            "</div>" +
            "<p>" +
            data[i].HostCountry +
            "</p>" +
            "<p>" +
            data[i].MoreInformation +
            "</p>" +
            "</div>" +
            "</div>" +
            "</div>";
        }
        vhtml += "</div>";
        document.getElementById("eventsName").innerHTML = vhtml;
      },
      error: function (error) {
        alert(error.responseText);
      },
    });
  }

  public getEventHostCountry() {
    // debugger;
    $.ajax({
      url: "http://180.151.86.53:90/api/Event/getEventHostCountry/",
      method: "GET",
      crossDomain: true,
      async: false,
      cache: false,
      dataType: "json",
      data: {
        Flag1: "",
        Flag2: "",
      },
      beforeSend: function () {},
      success: function (data) {
        // var vmsg=data;

        var ddlCounty = document.getElementById("ddlCounty");
        var options = "<option value='Select-Country'>Select-Country</option>";
        for (var i = 0; i < data.length; i++) {
          options += "<option>" + data[i].HostCountry + "</option>";
        }
        ddlCounty.innerHTML = options;
      },
      error: function (error) {
        alert(error.responseText);
      },
    });
  }
  public getEventDetails() {
    //var $ = require("jquery");
    var reactHandler = this;
    $.ajax({
      url: "http://180.151.86.53:90/Api/Event/getAllEventDetails/",
      method: "GET",
      crossDomain: true,
      async: false,
      cache: false,
      dataType: "json",
      data: {},
      beforeSend: function () {},
      success: function (data) {
        reactHandler.setState(
          { items: data },
          function () {
            console.log(this.state.items);
          }.bind(this)
        );
      }.bind(this),
      error: function (error) {
        alert(error.responseText);
      },
    });
  }

  public render(): React.ReactElement<IEventListingProps> {
    return (
      <div className={styles.eventListing}>
        <div className={styles.cardContainer}>
          <div className={styles.header}>
            <div className={styles.heading}>Event Listing</div>
            <div>
              <button className={styles.saveButton}>CREATE EVENT</button>
            </div>
          </div>

          <div className={styles.bodyContainer}>
            <div className={styles.searchHeader}>
              <div className={["form-group", styles.search].join(" ")}>
                <input
                  type="text"
                  id="Search"
                  name="moduleName"
                  className="form-control"
                  placeholder="Search Events"
                />
                <img
                  className={styles.searchIcon}
                  src="data:image/png;base64,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"
                />
              </div>
            </div>
            <div className={styles.status}>
              <div className="form-group mySelect">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" disabled selected hidden>
                    Select Status
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div className={styles.country}>
              <div className="form-group mySelect">
                <select
                  className="form-control"
                  id="ddlCounty"
                  onChange={this.EventFilterHostCountry}
                >
                  ​​​​​​​​
                  <option value="" disabled selected hidden>
                    Select Country
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className={styles.startDate}>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="National Day (DD/MM/YYYY)"
                  id="nationalday"
                />
              </div>
            </div>
            <div className={styles.endDate}>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="National Day (DD/MM/YYYY)"
                  id="nationalday"
                />
              </div>
            </div>
            {/* <div className={styles.endDate}>
              <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="" disabled selected hidden>
                    End Date
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div> */}
          </div>
          <div className={styles.CardsListing} id="eventsName">
            <div className="row">
              {/* {JSON.stringify(this.mainRefs.state.items)} */}
              {this.mainRefs.state.items.map(
                (data, i): JSX.Element => {
                  return (
                    <div className="col-md-3 col-lg-3" key={i}>
                      <div className={styles.card} id={data.id}>
                        <div className={styles.imgPart}>
                          <div className={styles.image}>
                            <img
                              src="https://www.aljazeera.com/wp-content/uploads/2019/05/bfaa3028d16c48ecaf4dfcc7cf34f0f4_18.jpeg?fit=998%2C562"
                              alt="Avatar"
                              className={styles.img}
                            />
                          </div>
                        </div>
                        <div className={styles.bottomleft}>
                          10-11-2020 to 12-11-2020B
                        </div>
                        <div className={styles.cardBody}>
                          <div className={styles.cardBetween}>
                            <div>
                              <div className={styles.cardHeading}>
                                {data.Title}
                              </div>
                            </div>
                          </div>
                          <p>{data.Country}</p>
                          <p className={styles.moreInformation}>
                            {data.MoreInformation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* <div>LOADMORE</div> */}
        </div>
      </div>
    );
  }
}
