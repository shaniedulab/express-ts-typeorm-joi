import {Entity,Column , PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne} from 'typeorm';
import StudentDetails from './StudentDetails';

@Entity()
class Students{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({
        nullable:true,
        default:null,
        length:100
    })
    studentName!:string;

    @Column({
        nullable:true,
        default:null,
        length:100
    })
    studentEmail!:string;

    @Column({
        nullable:true,
    })
    studentAge!:number;

    @Column({
        nullable:true,
 
    })
    studentRoleN!:string;  

    @CreateDateColumn()
    isCreated:Date | undefined;

    @UpdateDateColumn()
    isUpdated:Date | undefined;
    
    @OneToOne(()=>StudentDetails,(StudentDetails)=>StudentDetails.student)
    sd:StudentDetails | undefined;
}

export default Students;
