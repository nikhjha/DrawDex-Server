import { Entity, PrimaryKey, Property} from "@mikro-orm/core";

@Entity()
export class User {

 @PrimaryKey()
  id!: string;

  @Property({type : 'date'})
  createdAt: Date = new Date();

  @Property({ type : 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({type : 'text'})
  name!: string;

  @Property({ type : 'text'})
  email!: string;

  @Property({ nullable : true})
  age?: number;

}