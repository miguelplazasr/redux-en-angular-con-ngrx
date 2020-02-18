// Accion : describe lo que el reducer tiene que hacer y es ina interface
export interface Action {
    type: string;
    payload?: any;
}


export interface Reducer<T> {
    ( state: T, action: Action ): T
}
