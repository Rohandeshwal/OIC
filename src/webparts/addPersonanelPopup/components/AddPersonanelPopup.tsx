import * as React from "react";
import styles from "./AddPersonanelPopup.module.scss";
import { IAddPersonanelPopupProps } from "./IAddPersonanelPopupProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class AddPersonanelPopup extends React.Component<
  IAddPersonanelPopupProps,
  {}
> {
  public render(): React.ReactElement<IAddPersonanelPopupProps> {
    return <div className={styles.addPersonanelPopup}></div>;
  }
}
