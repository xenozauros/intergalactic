import cn from 'classnames';
import { CSSProperties, Ref } from 'react';
import { forkRef } from './ref';

export function callAllEventHandlers(...fns) {
  return (...args) =>
    !fns.some((fn) => {
      let result;
      if (fn) {
        result = fn(...args);
      }
      return typeof result === 'boolean' && !result;
    });
}

export function assignHandlers(props, source) {
  return Object.keys(source).reduce((proxySource, propName) => {
    if (typeof source[propName] === 'function' && propName.startsWith('on')) {
      proxySource[propName] = callAllEventHandlers(props[propName], source[propName]);
    }
    return proxySource;
  }, {});
}

function assignHandlersInner(props, source) {
  return Object.keys(source).reduce((proxySource, propName) => {
    if (
      typeof source[propName] === 'function' &&
      typeof props[propName] === 'function' &&
      propName.startsWith('on')
    ) {
      proxySource[propName] = callAllEventHandlers(props[propName], source[propName]);
    }
    return proxySource;
  }, {});
}

export interface AssignableProps {
  ref?: Ref<any>;
  style?: CSSProperties;
  className?: string;

  [key: string]: any;
}

export default function assignProps<P extends AssignableProps, S extends AssignableProps>(
  props: P = {} as P,
  source: S = {} as S,
) {
  // @ts-ignore
  if (props === source) return props;
  const newProps = {
    ...source,
    ...props,
    ...assignHandlersInner(props, source),
  };

  if (source.ref && props.ref) {
    newProps.ref = forkRef(source.ref, props.ref);
  }

  if (source.style && props.style) {
    newProps.style = {
      ...source.style,
      ...props.style,
    };
  }

  if (source.className) {
    newProps.className = cn(props.className, source.className);
  }

  return newProps;
}
