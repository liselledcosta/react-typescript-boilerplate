import * as React from "react";
import * as _ from 'lodash';
import { browserHistory } from "react-router";
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle, Button } from "react-bootstrap";

export class UsersCRUDModalComponent extends React.Component<IUserCRUDProps, IUserCRUDState> {

    constructor(props: IUserCRUDProps) {
        super(props);
        this.state = {
            studentDetails: {
                name: "Liselle",
                email: "liselledcosta@gmail.com",
                contact: "9898989898",
                age: 26
            },
        }
    }

  componentWillMount() {
      
  }

  render() {
    return(
    <div>
    <Modal show={true} onHide={this.handleClose}>
        <ModalHeader>
            <ModalTitle>Edit user</ModalTitle>
        </ModalHeader>
        <form>
            <ModalBody>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" ref="name" defaultValue={this.state.studentDetails.name} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" ref="email" defaultValue={this.state.studentDetails.email} />
                </div>
                <div className="form-group">
                    <label>Contact no</label>
                    <input type="text" className="form-control" placeholder="Contact no" ref="contact" defaultValue={this.state.studentDetails.contact} />
                </div>
            </ModalBody>

            <ModalFooter>
                <Button onClick={this.handleClose}>Close</Button>
                <Button bsStyle="primary" type="button" onClick={() => this.viewUserDetails('1')}>View more</Button>
            </ModalFooter>
        </form>
    </Modal>
    </div>
    )
  }

  
    public handleClose = () => {
        this.props.hideViewMoreCallback();
    }

    // e: React.FormEvent
    public viewUserDetails(id: string):void {
        browserHistory.push('/user/' + id);
    }
}