import { BehaviorSubject } from 'rxjs';

export class State<T> {
  data: T = null;
  isLoading: boolean = false;
  isSucess: boolean = false;
  isError: boolean = false;
  isSuccessPersisted:boolean = false;
  isErrorPersisted:boolean = false;
  isNone: boolean = true;
  errorMessage: string = null;

  behaviorSubject: BehaviorSubject<State<T>>;

  constructor(behaviorSubject: BehaviorSubject<State<T>>) {
    this.behaviorSubject = behaviorSubject;
  }


  notifyLoading() {
    this.data = null;
    this.isLoading = true;
    this.isSucess = false;
    this.isSuccessPersisted=false;
    this.isError = false;
    this.isErrorPersisted=false;
    this.isNone = false;
    this.errorMessage = null;
    this.behaviorSubject.next(this);
  }

  notifySuccess(data: T) {
    this.data = data;
    this.isLoading = false;
    this.isSucess = true;
    this.isSuccessPersisted = false;
    this.isError = false;
    this.isErrorPersisted=false
    this.isNone = false;
    this.errorMessage = null;

    this.behaviorSubject.next(this);

   
    this.isSucess = false;
    this.isSuccessPersisted = true;
   

    this.behaviorSubject.next(this);
  }

  notifyError(errorMessage: string) {
    this.data = null;
    this.isLoading = false;
    this.isSucess = false;
    this.isSuccessPersisted=false;
    this.isError = true;
    this.isErrorPersisted=false;
    this.isNone = false;
    this.errorMessage = errorMessage;

    this.behaviorSubject.next(this);

    this.isError = false;
    this.isErrorPersisted = true;
  }

  getData(): T {
    return this.data;
  }

}
