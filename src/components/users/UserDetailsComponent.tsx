import * as React from "react";
import * as _ from 'lodash';
import { browserHistory } from "react-router";

export class UserDetailsComponent extends React.Component<IUserDetailsProps, IUserDetailsState> {

    constructor(props: IUserDetailsProps) {
        super(props);
        this.state = {
            studentDetails: {
                name: "Liselle",
                email: "liselledcosta@gmail.com",
                contact: "9898989898",
                age: 26
            }
        }
    }

  render() {
    return <div className="container"> 
    <div className="row">
        <div className="col-md-4">
            <div className="well">
                <h4 className="myclass">User details</h4>
                <p>User ID: {this.props.params.id}</p>
                <p>Name: {this.state.studentDetails.name}</p>
                <p>Email: {this.state.studentDetails.email}</p>
                <p>Contact: {this.state.studentDetails.contact}</p>
                <p>Age: {this.state.studentDetails.age}</p>
            </div>
        </div>
    </div>
    </div>
  }
}