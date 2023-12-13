import { Student } from './student.interface';
import { Schema, model, connect } from 'mongoose';

const studentSchema = new Schema()<Student>({
  id: { type: String },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  gender: ['male', 'female'],
});
