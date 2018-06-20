import * as React from "react";
import { browserHistory } from "react-router";
import { Button } from 'react-bootstrap';
import { UsersCRUDModalComponent } from "./UsersCRUDModalComponent";

export class UsersListComponent extends React.Component<IUserListProps, IUserListState> {
  constructor(props: IUserListProps) {
    super(props);
    this.state = {
      students: [],
      viewMoreModal: false
    }
  }

  componentWillMount() {
      let students = JSON.parse(localStorage.getItem('students')) || [];
      this.setState({students})
  }


  render() {
    return <div className="container">
      <h3 className="myclass">List of users <Button className="default" onClick={this.addNew}>Add user</Button></h3>
      
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.students.map((obj: Student) => {
              return <tr>
                <td onClick={() => this.viewUserDetails('1')} className="red-bg">{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.contact}</td>
                <td onClick={() => this.viewMore('1')}>View more</td>
              </tr>
            })
          }
        </tbody>
      </table>
      {
        this.state.viewMoreModal &&
        <UsersCRUDModalComponent hideViewMoreCallback={this.hideViewMoreHandler} sendDetailsCallback={this.sendDetailsHandler}/>
      }
    </div>
  }

  private addNew = (): void => {
    browserHistory.push('/users/add');
  }

  public viewUserDetails(id: string):void {
    browserHistory.push('/user/' + id);
  }

  public viewMore = (id: string):void => {
    this.setState({viewMoreModal: true})
  }

  // DUMMY CALLBACK HANDLER WITHOUT PARAMS
  public hideViewMoreHandler = ():void => {
    this.setState({viewMoreModal: false})
  }

  // DUMMY CALLBACK HANDLER WITH PARAMS
  public sendDetailsHandler = (studentDetails: Student):void => {
    console.log("LD Debug - studentDetails : ", studentDetails)
  }

}