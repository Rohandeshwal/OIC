import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'EventOicMemberDetailsWebPartStrings';
import EventOicMemberDetails from './components/EventOicMemberDetails';
import { IEventOicMemberDetailsProps } from './components/IEventOicMemberDetailsProps';

export interface IEventOicMemberDetailsWebPartProps {
  description: string;
}

export default class EventOicMemberDetailsWebPart extends BaseClientSideWebPart<IEventOicMemberDetailsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEventOicMemberDetailsProps> = React.createElement(
      EventOicMemberDetails,
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
