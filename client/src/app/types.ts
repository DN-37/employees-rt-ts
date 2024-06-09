export type User = {
  id: string;
  email: string;
  password: string;
  name?: string;
  createdEmployee: Employee[];
};

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  user: User;
  userId: string;
};
