import * as React from "react";
import * as _ from 'lodash';
import { browserHistory } from "react-router";
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";

export class UsersCRUDComponent extends React.Component<IUserCRUDProps, IUserCRUDState> {

    constructor(props: IUserCRUDProps) {
        super(props);
        this.state = {
            studentDetails: {
                name: "",
                email: "",
                contact: "",
                age: 0
            },
        }
    }

  componentWillMount() {
      
  }

  render() {
    return(
    <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" ref="name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" ref="email" />
                </div>
                <div className="form-group">
                    <label>Contact no</label>
                    <input type="text" className="form-control" placeholder="Contact no" ref="contact" />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control" placeholder="Age" ref="age" />
                </div>
                <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Save changes</button>
            </form>
        </div>
    </div>
    )
  }


    // e: React.FormEvent
    public handleSubmit = () => {
          const name = (this.refs['name'] as any as HTMLInputElement).value.trim();
          const email = (this.refs['email'] as any as HTMLInputElement).value.trim();
          const contact = (this.refs['contact'] as any as HTMLInputElement).value.trim();
          const age = parseInt((this.refs['contact'] as any as HTMLInputElement).value);
          var studentDetails = {} as Student;
          studentDetails.name = name;
          studentDetails.email = email;
          studentDetails.contact = contact;
          
          let localStorageData = JSON.parse(localStorage.getItem('students')) || [];
          if (!_.isEmpty(localStorageData)) {
              localStorageData.push(studentDetails)
          } else {
              localStorageData[0] = studentDetails;
          }
          localStorage.setItem("students", JSON.stringify(localStorageData));
  
          this.setState({studentDetails})
          browserHistory.push('/users')
    }
}