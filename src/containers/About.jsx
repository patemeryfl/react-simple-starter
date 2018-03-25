import React from 'react';
import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown';

class About extends React.Component {
  state = {
    content: null,
  }
  componentWillMount() {
    this.actions.getMarkdown();
  }
  componentDidMount() { Prism.highlightAll(); }
  componentDidUpdate() { Prism.highlightAll(); }
  actions = {
    getMarkdown: async () => {
      const response = await fetch('https://raw.githubusercontent.com/patemeryfl/react-simple-starter/master/readme.md');
      const body = await response.text();
      return this.setState({ content: body });
    },
  }
  render() {
    if (this.state.content === null) {
      return (<div>Loading...</div>);
    }
    return (
      <div className="about">
        <ReactMarkdown source={this.state.content} /><br />
      </div>
    );
  }
}

export default About;
