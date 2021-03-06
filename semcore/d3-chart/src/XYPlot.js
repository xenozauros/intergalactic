import React from 'react';
import createComponent, { Component, styled } from '@semcore/core';
import { Box } from '@semcore/flex-box';
import EventEmitter from '@semcore/utils/lib/eventEmitter';
import trottle from '@semcore/utils/lib/rafTrottle';
import { eventToPoint, invert } from './utils';

import style from './style/xyplot.shadow.css';

class XYPlotRoot extends Component {
  static displayName = 'XYPlot';

  static style = style;

  constructor(props) {
    super(props);
    this.eventEmitter = props.eventEmitter || new EventEmitter();
  }

  static defaultProps = () => ({
    data: [],
    scale: [],
    width: 0,
    height: 0,
  });

  rootRef = React.createRef();

  emitNearestXY = trottle((e) => {
    const [xScale, yScale] = this.asProps.scale;
    const [x, y] = eventToPoint(e, this.rootRef.current);
    this.eventEmitter.emit(`onNearestXY`, [invert(xScale, x), invert(yScale, y)]);
  });

  handlerMouseMove = (e) => {
    e.persist();
    this.emitNearestXY(e);
  };

  handlerMouseLeave = trottle(() => {
    this.eventEmitter.emit(`onNearestXY`, []);
  });

  setContext() {
    const { scale, data } = this.asProps;
    return {
      $rootProps: {
        data: data,
        scale: scale,
        eventEmitter: this.eventEmitter,
        rootRef: this.rootRef,
      },
    };
  }

  render() {
    const SXYPlot = this.Root;
    const { styles, width, height } = this.asProps;

    if (!width || !height) return null;

    return styled(styles)(
      <SXYPlot
        render={Box}
        tag="svg"
        __excludeProps={['data', 'scale']}
        ref={this.rootRef}
        onMouseMove={this.handlerMouseMove}
        onMouseLeave={this.handlerMouseLeave}
      />,
    );
  }
}

export default createComponent(XYPlotRoot);
