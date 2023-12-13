import { Schema, model, connect } from 'mongoose';

export type Gaurdian = {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  profession: string;
};

export type Student = {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email?: string;
  gaurdian?: Gaurdian;
};
