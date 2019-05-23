import {
  AggregateStatusCount,
  AggregateStatusNotification,
  AggregateStatusNotifications,
  Card,
  Icon,
} from 'patternfly-react';
import * as React from 'react';
import { toTestId } from '../utils';

export interface IAggregatedMetricProps {
  title: string;
  ok: number;
  error: number;
  total: number;
}

export class AggregatedMetricCard extends React.PureComponent<
  IAggregatedMetricProps
> {
  public formatNumber(num: number) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  public render() {
    return (
      <Card accented={true} aggregated={true} matchHeight={true}>
        <Card.Title>
          <AggregateStatusCount>
            <span
              data-testid={`${toTestId('AggregatedMetricCard', 'total-count')}`}
            >
              {this.formatNumber(this.props.total)}
            </span>
            <span data-testid={`${toTestId('AggregatedMetricCard', 'title')}`}>
              {' '}
              {this.props.title}
            </span>
          </AggregateStatusCount>
        </Card.Title>
        <Card.Body>
          <AggregateStatusNotifications>
            <AggregateStatusNotification>
              <Icon type="pf" name="ok" />
              <span
                data-testid={`${toTestId('AggregatedMetricCard', 'ok-count')}`}
              >
                {this.formatNumber(this.props.ok)}
              </span>{' '}
            </AggregateStatusNotification>
            <AggregateStatusNotification>
              <Icon type="pf" name="error-circle-o" />
              <span
                data-testid={`${toTestId(
                  'AggregatedMetricCard',
                  'error-count'
                )}`}
              >
                {this.formatNumber(this.props.error)}
              </span>
            </AggregateStatusNotification>
          </AggregateStatusNotifications>
        </Card.Body>
      </Card>
    );
  }
}
