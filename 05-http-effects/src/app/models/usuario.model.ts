export class UsuarioModel {

  public id: number;
  public first_name: string;
  public last_name: string;
  public avatar: string;

  constructor( data?: IObj ) {
    Object.assign( this, data);
  }


}

interface IObj {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
