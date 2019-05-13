import React, { Component } from 'react';
import { fetchMentors, fetchMentorsWithfailure } from './ApiRequestMock';

export default class extends Component {
  state = {
    isLoading: true, 
    mentors: null,
    errorMessage: null
  }
  async componentDidMount() {
    
    try {
      const mentors = await fetchMentorsWithfailure();
      this.setState({
        isLoading: false,
        mentors
      });
    } catch(err) {
      this.setState({
        isLoading: false,
        errorMessage: err.message,
      })
    }
  }
  render() {
    const { isLoading, mentors, errorMessage } = this.state;
    if (isLoading) return <p>メンター情報を取得しています。</p>
    if (mentors === null && errorMessage) return <p>エラーが発生しました。</p> 
    if (mentors.length > 0) {
      return <p>メンターが{mentors.length}人います。</p>
    }
    return <p>メンターは0人です。</p>
  }
}