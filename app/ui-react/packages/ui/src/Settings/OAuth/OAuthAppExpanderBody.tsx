import { Alert, Button, Col, Row } from 'patternfly-react';
import * as React from 'react';
import { toTestId } from '../../utils';

export interface IOAuthAppExpanderBodyProps {
  showSuccess: boolean;
  disableSave: boolean;
  disableRemove: boolean;
  onSave: () => void;
  onRemove: () => void;
  children: React.ReactNode;
  i18nRemoveButtonText: string;
  i18nSaveButtonText: string;
  i18nAlertTitle: string;
  i18nAlertDetail: string;
}

export class OAuthAppExpanderBody extends React.Component<
  IOAuthAppExpanderBodyProps
> {
  constructor(props: IOAuthAppExpanderBodyProps) {
    super(props);
  }
  public render() {
    return (
      <>
        {this.props.showSuccess && (
          <Row>
            <Col xs={11}>
              <Alert type={'success'}>
                <strong>{this.props.i18nAlertTitle}</strong>&nbsp;
                {this.props.i18nAlertDetail}
              </Alert>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12} md={8}>
            {this.props.children}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <>
              <Button
                data-testid={`${toTestId(
                  'OAuthAppExpanderBody',
                  'save-button'
                )}`}
                bsStyle="primary"
                onClick={this.props.onSave}
                disabled={this.props.disableSave}
              >
                {this.props.i18nSaveButtonText}
              </Button>{' '}
              <Button
                data-testid={`${toTestId(
                  'OAuthAppExpanderBody',
                  'remove-button'
                )}`}
                onClick={this.props.onRemove}
                disabled={this.props.disableRemove}
              >
                {this.props.i18nRemoveButtonText}
              </Button>
            </>
          </Col>
        </Row>
      </>
    );
  }
}
