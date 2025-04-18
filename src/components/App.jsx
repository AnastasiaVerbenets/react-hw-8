const { Component } = require('react');
const { Feedback } = require('./Feedback/Feedback');
const { Statistics } = require('./Statistics/Statistics');

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
      <div>
        <Feedback onLeaveFeedback={this.handleFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
