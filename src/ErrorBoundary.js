import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // この中で外部サーバーにエラー情報を送信するようなことをします。
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>エラーが発生しました！</h1>;
    }

    return this.props.children;
  }
}