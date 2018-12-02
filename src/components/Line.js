import React, { Component, createRef } from 'react'
import style from './Line.module.scss'
import Number from './Number'

class Line extends Component {
  track = createRef()
  state = { width: 0 }

  componentDidMount() {
    const { width } = this.track.current.getBoundingClientRect()
    this.setState({ width: width - 50 })
  }

  calcBarWidth = () => {
    const { chips, max } = this.props
    const { width } = this.state
    return width * (chips / max)
  }

  render() {
    const { index, chips, debt } = this.props

    return (
      <div className={style.line}>
        <span className={style.index}>{index}</span>
        <div className={style.track} ref={this.track}>
          <div className={style.bar} style={{ width: this.calcBarWidth() }} />
          <span className={style.number}>
            <Number>{chips}</Number>
          </span>
        </div>
        <span className={style.debt}>{!!debt && -1 * debt}</span>
      </div>
    )
  }
}

export default Line