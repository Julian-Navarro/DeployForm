import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from "typeorm"


@Entity()
export class Survey {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column()
    gender!: string;
    @Column()
    city!: string;
    @Column()
    commune!: string;
    @Column()
    punctuation!: number;
    @CreateDateColumn()
    createdAt!: Date;
    @Column({nullable: true})
    childrens?: string;
    @Column({
        array: true,
        type: "enum",
        enum: [
        "Con mis padres", 
        "Con mi pareja", 
        "Con mis hijos", 
        "Con mis hermanos",
        "Con mi mascota",
        "Con amigos", 
        "Solo",
        "Otro"
        ]
    })
    livesWith!: string[];
    @Column({
        array:true,
        type: "enum",
        enum: [
        "Trabajo", 
        "Estudio", 
        "Dueño de casa", 
        "Retirado", "Buscando trabajo", 
        "Otro"
        ],
    })
    occupation!: any[];
}