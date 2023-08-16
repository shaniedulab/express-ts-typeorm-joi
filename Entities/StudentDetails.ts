import {Column,PrimaryGeneratedColumn,OneToOne,Entity,JoinColumn} from 'typeorm'
import Student from './Student';

@Entity()
export default class StudentDetails{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    studentCourse:string;

    @Column()
    studentPassingYear:Date;

    @Column()
    studentGrade:string;

    @OneToOne(()=>Student,(student)=>student.sd)
    @JoinColumn()
    student:Student;
}
