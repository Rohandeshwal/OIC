import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'UploadDocumentsWebPartStrings';
import UploadDocuments from './components/UploadDocuments';
import { IUploadDocumentsProps } from './components/IUploadDocumentsProps';

export interface IUploadDocumentsWebPartProps {
  description: string;
}

export default class UploadDocumentsWebPart extends BaseClientSideWebPart<IUploadDocumentsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IUploadDocumentsProps> = React.createElement(
      UploadDocuments,
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
