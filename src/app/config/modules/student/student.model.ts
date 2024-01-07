import { Gaurdian, Student, Username } from './student.interface';
import { Schema, model } from 'mongoose';

const usernameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gaurdianSchema = new Schema<Gaurdian>({
  name: {
    type: String,
    required: true,
  },
  gender: ['male', 'female'],
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
  name: usernameSchema,
  gender: ['male', 'female'],
  gaurdian: gaurdianSchema,
});

export const StudentModel = model<Student>('Student', studentSchema);
