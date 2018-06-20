import * as React from "react";
import { browserHistory } from "react-router";
import { Button } from 'react-bootstrap';

export class UsersListComponent extends React.Component<IUserListProps, IUserListState> {
  constructor(props: IUserListProps) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentWillMount() {
      let students = JSON.parse(localStorage.getItem('students')) || [];
      this.setState({students})
  }


  render() {
    return <div>
      <h1 className="myclass">List of users</h1>
      <Button className="default" onClick={this.addNew}>Add more</Button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.students.map((obj: Student) => {
              return <tr onClick={() => this.viewUserDetails('1')}>
                <td className="red-bg">{obj.name}</td>
                <td>{obj.age}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  }

  private addNew = (): void => {
    browserHistory.push('/usersAdd');
  }

  public viewUserDetails(id: string):void {
    browserHistory.push('/user/' + id);
  }

}