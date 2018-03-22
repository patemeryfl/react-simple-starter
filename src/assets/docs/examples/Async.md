# Async Example

Another key feature of this starter is the use of async functions. Babel has been pre-configured to handle them as well as class transform properties. This makes a really clean setup for managing your state and actions.

## GitHub Profile Fetcher

```javascript
import React from 'react';

class GitHubProfile extends React.Component {
  state = {
    text: 'Enter your GitHub username here!'
    user: {
      name: null,
      stars: null,
      followers: null,
    }
  }
  actions = {
    handleInput: ({text}) => {
      this.setState({ text: text.target.value  })
    },
    getUser: async ({user}) => {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const profile = await response.json();
      return this.setState({
          user: {
            name: profile.login,
            stars: profile.stars,
            followers: profile.followers
          }
        });
      },
  }
  componentWillMount() {
    this.actions.getUser("patemeryfl");
  }
  render() {
    { name, stars, followers } = this.state.user;
    return(
      <form onSubmit={this.getUser}>
        <input placeholder={this.state.text} onChange={this.handleInput} />
        <button type="submit">Fetch your profile info</button>
      </form>
      <strong>Name:</strong><p>{name}</p>
      <strong>Stars:</strong><p>{stars}</p>
      <strong>Followers:</strong><p>{followers}</p>
    )
  }
}
```

In this example, we define our state to manage the input box as well as an initial object to hold the returned GitHub profile data. We have an async function as an action that takes a username as a parameter and passes it into fetch using a template literal. We use the await keyword to create a clean way of handling the response once the fetch method resolves. When it resolves, we call setState to add our fetched user to our state and re-render the component with the new data.

## Working Example