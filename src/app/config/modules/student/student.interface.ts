// import { Schema, model, connect } from 'mongoose';

export type Gaurdian = {
  name: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  profession: string;
};

export type Username = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: string;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email?: string;
  gaurdian?: Gaurdian;
};
