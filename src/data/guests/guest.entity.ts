import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Guest extends BaseEntity {
    public static async findMany(ids: number[]): Promise<Guest[]> {
        return Guest.findByIds(ids);
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column("text")
    public password: string;

    @Column("text")
    public content: string;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;
}
