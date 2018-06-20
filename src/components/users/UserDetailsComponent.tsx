import * as React from "react";
import * as _ from 'lodash';
import { browserHistory } from "react-router";

export class UserDetailsComponent extends React.Component<IUserDetailsProps, IUserDetailsState> {

    constructor(props: IUserDetailsProps) {
        super(props);
        this.state = {
            studentDetails: {
                name: "Liselle",
                age: 12
            }
        }
    }

  render() {
    return <div>
        <h1 className="myclass">User details</h1>
        <p>User ID: {this.props.params.id}</p>
        <p>Name: {this.state.studentDetails.name}</p>
        <p>Age: {this.state.studentDetails.age}</p>
    </div>
  }
}