import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    console.log(this.props.name + " constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " component mounter");

    const data = await fetch("https://api.github.com/users/dev-rsiva");

    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    // setInterval(() => {
    //   console.log("its running");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unMounted");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    console.log(this.props.name + " render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="image" />
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
