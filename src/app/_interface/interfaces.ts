export interface IRegistration {
  firstName: string; 
  lastName: string; 
  gender: string; 
  hobby: string; 
  email: string; 
  password: string; 
  cpassword: string; 
}

export interface ILogin {
  userName: string; 
  password: string;
}

export interface IFakeData {
  userId: number; 
  id: number;
  title: string; 
  body: string;
}