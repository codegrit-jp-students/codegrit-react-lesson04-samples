import React, { Component } from 'react';

export default class extends Component {
  state = {
    resized: false
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      resized: true
    })
  }

  render() {
    const { resized } = this.state;
    if (resized) return <p>リサイズされました。</p>
    return <p>リサイズされていません。</p>

  }
}