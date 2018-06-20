/* -----------------------------------------------
Common interfaces
------------------------------------------------*/
interface Student {
    name: string;
    email: string;
    contact: string;
    age: number
}
/* -----------------------------------------------
Interfaces for Student CRUD state & props
------------------------------------------------*/
interface IUserCRUDProps {
    studentDetails?: Student;
    hideViewMoreCallback(): void
    // hideViewMoreCallback: ((details: FooDetails) => void)
}

interface IUserCRUDState {
    studentDetails: Student;
}
/* -----------------------------------------------
Interfaces for Student List state & props
------------------------------------------------*/
interface IUserListProps {
    students: Array<Student>;
}

interface IUserListState {
    students: Array<Student>;
    viewMoreModal: boolean;
}
/* -----------------------------------------------
Interfaces for Student Details state & props
------------------------------------------------*/
interface IUserDetailsProps {
    studentDetails: Student;
    params: {
        id: string
    }
}

interface IUserDetailsState {
    studentDetails: Student;
}