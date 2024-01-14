import { Gaurdian, Student, Username } from './student.interface';
import { Schema, model } from 'mongoose';
import validator from 'validator';

const usernameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: [true, 'first name needed'],
    trim: true,
    maxlength: [20, "Length can't be more than 20 characters"],
    validate: {
      validator: function (value: string) {
        const firstName = value.charAt(0).toUpperCase() + value.slice(1);
        return firstName === value;
      },
      message: '{VALUE} is not in capitalized format',
    },
  },
  lastName: {
    type: String,
    required: [true, 'last name needed'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
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
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email',
    },
  },
  profession: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
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
