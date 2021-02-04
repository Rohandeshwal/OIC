import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AttendeesOicMemberListWebPartStrings';
import AttendeesOicMemberList from './components/AttendeesOicMemberList';
import { IAttendeesOicMemberListProps } from './components/IAttendeesOicMemberListProps';

export interface IAttendeesOicMemberListWebPartProps {
  description: string;
}

export default class AttendeesOicMemberListWebPart extends BaseClientSideWebPart<IAttendeesOicMemberListWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAttendeesOicMemberListProps> = React.createElement(
      AttendeesOicMemberList,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
