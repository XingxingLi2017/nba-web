import React from 'react';
import {ShotChart} from "./ShotChart"
import { Slider, InputNumber, Row, Col } from 'antd';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }
    onChange = (value) => {
        this.setState({
            minCount: value,
        });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip="hexbin"
                />
                <Row>
                    <Col offset={4} span={12}>
                        <Slider min={2} max={20} onChange={this.onChange} value={this.state.minCount} />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={2}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={this.state.minCount}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>

            </div>
        )
    }
}
