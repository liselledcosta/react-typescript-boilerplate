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
                age: 0
            },
            show: false
        }
    }

  componentWillMount() {
    this.handleShow();
  }

  render() {
    return(
    <div className="static-modal">
    <Modal show={this.state.show} onHide={this.handleClose}>
        <ModalHeader>
        <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
            <form>

        <ModalBody>
                <label>
                    Name:
                    <input type="text" name="name" ref="name" />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" ref="age" />
                </label>
                <input type="button" value="Submit"  />
        </ModalBody>

        <ModalFooter>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary" type="button" onClick={this.handleSubmit}>Save changes</Button>
        </ModalFooter>
        </form>
    </Modal>
    </div>
    )
  }

  
    public handleClose = () => {
        this.setState({ show: false });
    }

    public handleShow = () => {
        this.setState({ show: true });
    }

    // e: React.FormEvent
    public handleSubmit = () => {
        console.log("Inside handle submit")
          const name = (this.refs['name'] as any as HTMLInputElement).value.trim();
          const age = parseInt((this.refs['age'] as any as HTMLInputElement).value);
          var studentDetails = {} as Student;
          studentDetails.name = name;
          studentDetails.age = age;
          
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