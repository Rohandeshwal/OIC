import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'EventViewuploadWebPartStrings';
import EventViewupload from './components/EventViewupload';
import { IEventViewuploadProps } from './components/IEventViewuploadProps';

export interface IEventViewuploadWebPartProps {
  description: string;
}

export default class EventViewuploadWebPart extends BaseClientSideWebPart<IEventViewuploadWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEventViewuploadProps> = React.createElement(
      EventViewupload,
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
