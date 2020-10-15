import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandle: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({message: "Validations Fail's", errors})
  }

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandle;
