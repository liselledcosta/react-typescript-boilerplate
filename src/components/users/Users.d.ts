/* -----------------------------------------------
Common interfaces
------------------------------------------------*/
interface Student {
    name: string;
    age: number;
}
/* -----------------------------------------------
Interfaces for Student CRUD state & props
------------------------------------------------*/
interface IUserCRUDProps {
    studentDetails: Student;
    show: boolean
}

interface IUserCRUDState {
    studentDetails: Student;
    show: boolean
}
/* -----------------------------------------------
Interfaces for Student List state & props
------------------------------------------------*/
interface IUserListProps {
    students: Array<Student>;
}

interface IUserListState {
    students: Array<Student>;
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