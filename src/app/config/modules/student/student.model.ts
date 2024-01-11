import { Gaurdian, Student, Username } from './student.interface';
import { Schema, model } from 'mongoose';

const usernameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: [true, 'first name needed'],
  },
  lastName: {
    type: String,
    required: [true, 'last name needed'],
  },
});

const gaurdianSchema = new Schema<Gaurdian>({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'Gender field is invalid',
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: { type: usernameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is invalid',
    },
    required: true,
  },
  gaurdian: {
    type: gaurdianSchema,
    required: true,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
