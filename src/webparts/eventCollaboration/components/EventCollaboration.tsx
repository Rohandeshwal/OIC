import * as React from "react";
import styles from "./EventCollaboration.module.scss";
import { IEventCollaborationProps } from "./IEventCollaborationProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

export default class EventCollaboration extends React.Component<
  IEventCollaborationProps,
  {}
> {
  public render(): React.ReactElement<IEventCollaborationProps> {
    return (
      <div className={styles.eventCollaboration}>
        <div className="row">
          <div className="col-md-8">
            <div
              className={[
                "py-3",
                styles.actionContainer,
                styles.borderBottom,
              ].join(" ")}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <h5 className={styles.heading}>Event Unutuk</h5>
                  <h5 className={styles.heading}>Event Collaboration</h5>
                </div>
                <div className="col-lg-6 col-md-6">
                  <button className={["btn-link", "float-right", styles.moreBtn , styles.btnSize].join(' ')}>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png"
                      alt="moreIcon"
                      className={styles.moreIcon}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className={[styles.chatBoxContainer].join(" ")}>
              <div className={["w-100", styles.chatBox].join(" ")}>
                <div className="row">
                  <div className="col-md-4">
                    <hr />
                  </div>
                  <div className="col-md-4 text-center">
                    <p>Monday, October 19th</p>
                  </div>
                  <div className="col-md-4">
                    <hr />
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-12">
                    <div className={styles.leftChatCard}>
                      <div className={styles.imgPart}>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                          alt="Avatar"
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <h6>
                          Jone Doe <span className="float-right">11:30AM</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.  Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-12">
                    <div className={styles.rightChatCard}>
                      <div className={styles.cardBody}>
                        <h6>
                          Jone Doe <span className="float-right">11:30AM</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                      </div>
                      <div className={styles.imgPart}>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-12">
                    <div className={styles.rightChatCard}>
                      <div className={styles.cardBody}>
                        <h6>
                          Jone Doe <span className="float-right">11:30AM</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                      </div>
                      <div className={styles.imgPart}>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-12">
                    <div className={styles.leftChatCard}>
                      <div className={styles.imgPart}>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                          alt="Avatar"
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <h6>
                          Jone Doe <span className="float-right">11:30AM</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-md-12">
                    <div className={styles.rightChatCard}>
                      <div className={styles.cardBody}>
                        <h6>
                          Jone Doe <span className="float-right">11:30AM</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                      </div>
                      <div className={styles.imgPart}>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={styles.typeMessageSection}>
                    <input
                      type="text"
                      placeholder="type message here.."
                      className={["form-control", styles.typeField].join(" ")}
                    />
                    <button
                      className={["btn", styles.sendIconSection].join(" ")}
                    >
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className={styles.sendIcon}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={["col-md-4", "px-0", styles.memberListContainer].join(
              " "
            )}
          >
            <div>
              <h5 className="py-3 px-2">Member's List</h5>
            </div>
            <div
              className={["d-flex", "px-2", styles.actionContainer].join(" ")}
            >
              <div className={styles.searchHeader}>
                <div className="filter d-flex align-items-center">
                  <input
                    type="text"
                    id="myInput"
                    name="moduleName"
                    className="form-control"
                    placeholder="Search"
                  />
                  <img
                    className={styles.searchIcon}
                    src="data:image/png;base64,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"
                  />
                </div>
              </div>
            </div>
            <div className={styles.memberList}>
              <div className="row">
                <div className={["col-md-12", "px-0"].join(" ")}>
                  <div className={styles.card}>
                    <div className={styles.imgPart}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h6>Jone Doe</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className={["col-md-12", "px-0"].join(" ")}>
                  <div className={styles.card}>
                    <div className={styles.imgPart}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h6>Jone Doe</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className={["col-md-12", "px-0"].join(" ")}>
                  <div className={styles.card}>
                    <div className={styles.imgPart}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h6>Jone Doe</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className={["col-md-12", "px-0"].join(" ")}>
                  <div className={styles.card}>
                    <div className={styles.imgPart}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h6>Jone Doe</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className={["col-md-12", "px-0"].join(" ")}>
                  <div className={styles.card}>
                    <div className={styles.imgPart}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h6>Jone Doe</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className={["col-md-12", "px-0"].join(" ")}>
                  <div className={styles.card}>
                    <div className={styles.imgPart}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h6>Jone Doe</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
