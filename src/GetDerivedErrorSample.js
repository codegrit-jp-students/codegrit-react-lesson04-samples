import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { fetchMentorsWithfailure } from './ApiRequestMock';

const MentorsComponent = ({ mentors }) => {
  console.log(mentors);
  if (mentors === null) {
    throw new Error("メンターが取得できていません！");
  }
  return (
    <p>メンターが{mentors.length}人います。</p>
  );
}

export default class extends Component {
  state = {
    isLoading: true,
    mentors: null,
  }
  async componentDidMount() {
    try {
      const mentors = await fetchMentorsWithfailure();
      this.setState({
        isLoading: false,
        mentors
      });
    } catch (err) {
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    const { isLoading, mentors } = this.state;
    if (isLoading) return <p>メンター情報を取得しています。</p>
    return (
      <ErrorBoundary>
        <p>エラーの場合その旨が表示されます。</p>
        <MentorsComponent mentors={mentors}/>
      </ErrorBoundary>
    );
  }
}

