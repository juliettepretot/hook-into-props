import React from "react"
import hookIntoProps from "hook-into-props"

class ClassComponent extends React.Component {
  // ... (imagine legacy code here)
  handleChange = event => this.props.setValue(event.target.value)
  render() {
    return <textarea value={this.props.value} onChange={this.handleChange} />
  }
}

const useHooks = () => {
  const [value, setValue] = React.useState("Hello World!")

  return { value, setValue }
}

export default hookIntoProps(useHooks)(ClassComponent)
