import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'EventNegotiationWebPartStrings';
import EventNegotiation from './components/EventNegotiation';
import { IEventNegotiationProps } from './components/IEventNegotiationProps';

export interface IEventNegotiationWebPartProps {
  description: string;
}

export default class EventNegotiationWebPart extends BaseClientSideWebPart<IEventNegotiationWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEventNegotiationProps> = React.createElement(
      EventNegotiation,
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
