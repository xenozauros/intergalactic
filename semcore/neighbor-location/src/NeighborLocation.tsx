import React, { RefObject, useContext, useRef } from 'react';
import createComponent, { Component, register, CONTEXT_COMPONENT } from '@semcore/core';
import getOriginChildren from '@semcore/utils/lib/getOriginChildren';

export interface INeighborLocationProps {
  /** Number of elements in a group */
  controlsLength?: number;
}

export interface INeighborItemProps {
  /** Determines from which side the component has neighbors */
  neighborLocation?: 'right' | 'both' | 'left' | false;
}

const CALCULATE_NEIGHBOR_LOCATION = Symbol('CALCULATE_NEIGHBOR_LOCATION');

export type NeighborLocationType = 'both' | 'left' | 'right';

export interface INeighborLocationCtx {
  [CALCULATE_NEIGHBOR_LOCATION]: (prevNeighborLocation: RefObject<unknown>) => NeighborLocationType;
}

class NeighborLocationRoot extends Component<INeighborLocationProps> {
  static displayName = 'NeighborLocation';

  _currentIndex: null | number = null;

  calculateNeighborLocation(controlsLength, prevNeighborLocation) {
    // default state
    let neighborLocation = 'both';

    if (this._currentIndex === null) {
      // for re-render component
      if (prevNeighborLocation) {
        // return prev state
        return prevNeighborLocation;
      } else {
        // for not context component
        return undefined;
      }
    }
    // if one children
    if (controlsLength === 1) {
      return undefined;
    }
    // if first children
    if (this._currentIndex === 0) {
      neighborLocation = 'right';
    }
    // if last children
    if (this._currentIndex === controlsLength - 1) {
      neighborLocation = 'left';
    }
    // increment index children
    this._currentIndex = this._currentIndex + 1;
    // if finished render all children
    if (this._currentIndex === controlsLength) {
      // reset index
      this._currentIndex = null;
    }
    // return default state
    return neighborLocation;
  }

  setContext() {
    const {
      Children,
      controlsLength = React.Children.toArray(getOriginChildren(Children)).length,
    } = this.asProps;

    return {
      [CALCULATE_NEIGHBOR_LOCATION]: this.calculateNeighborLocation.bind(this, controlsLength),
    };
  }

  render() {
    const { Children } = this.asProps;
    this._currentIndex = 0;

    return Children.origin;
  }
}

function neighborLocationEnhance() {
  return (props) => {
    const prevNeighborLocationRef = useRef(undefined);
    const ctx = useContext<INeighborLocationCtx>(NeighborLocation[CONTEXT_COMPONENT]);
    if (ctx[CALCULATE_NEIGHBOR_LOCATION]) {
      prevNeighborLocationRef['current'] = ctx[CALCULATE_NEIGHBOR_LOCATION](
        prevNeighborLocationRef['current'],
      );
    }
    return {
      neighborLocation: prevNeighborLocationRef['current'],
      ...props,
    };
  };
}

const Context = register.get(
  'neighbor-location-context',
  React.createContext<INeighborLocationCtx>({} as INeighborLocationCtx),
);
const NeighborLocation = createComponent<INeighborLocationProps, {}, INeighborLocationCtx>(
  NeighborLocationRoot,
  {},
  {
    context: Context,
  },
);

export { neighborLocationEnhance };

export default NeighborLocation;
