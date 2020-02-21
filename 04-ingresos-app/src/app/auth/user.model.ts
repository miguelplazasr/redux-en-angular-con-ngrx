

export class UserModel {

  public name: string;
  public email: string;
  public uid: string;


  // el constructor recibe un objeto y se llena de forma dinamica
  constructor( obj: DataObj) {

    this.name = obj && obj.name || null;
    this.email = obj && obj.email || null;
    this.uid = obj && obj.uid || null;
  }
}


interface DataObj {
  uid: string;
  email: string;
  name: string;
}
