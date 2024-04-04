import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>

        <UserClass name={"First Child"} location={"Bangalore"} />
        
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//
//       <UserClass name={"Siva(Class)"} location={"Bangalore"} />
//     </div>
//   );
// };

export default About;
