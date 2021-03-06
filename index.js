import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

function hookIntoProps(useHooks) {
  return function(Component) {
    function HooksProvider(props) {
      return React.createElement(Component, { ...props, ...useHooks(props) })
    }

    HooksProvider.displayName = `HookIntoProps(${Component.displayName ||
      Component.name ||
      'Component'})`

    return hoistNonReactStatics(HooksProvider, Component)
  }
}

export default hookIntoProps
