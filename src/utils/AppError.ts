/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-types */
export abstract class AppError extends Error {
  readonly statusCode!: number;

  readonly name: string;

  readonly isOperational: boolean;

  constructor(message: object | string) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
    } else {
      super(message);
    }
    this.name = this.constructor.name;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Predefined 4xx http errors

export class HTTP400Error extends AppError {
  readonly statusCode = 400;

  constructor(message: string | object = 'Bad Request') {
    super(message);
  }
}

export class HTTP401Error extends AppError {
  readonly statusCode = 401;

  constructor(message: string | object = 'Unauthorized') {
    super(message);
  }
}

export class HTTP403Error extends AppError {
  readonly statusCode = 403;

  constructor(message: string | object = 'Forbidden') {
    super(message);
  }
}

export class HTTP404Error extends AppError {
  readonly statusCode = 404;

  constructor(message: string | object = 'Not found') {
    super(message);
  }
}

// Predefined 5xx http errors

// export class HTTP500Error extends AppError {
//   readonly statusCode = 500;

//   constructor(
//     message: string | object = 'Something went wrong, Please try again later.'
//   ) {
//     super(message);
//   }
// }

// export class HTTP502Error extends AppError {
//   readonly statusCode = 502;

//   constructor(message: string | object = 'Bad gateway') {
//     super(message);
//   }
// }

// export class HTTP503Error extends AppError {
//   readonly statusCode = 503;

//   constructor(message: string | object = 'Service unavailable') {
//     super(message);
//   }
// }

// export class HTTP504Error extends AppError {
//   readonly statusCode = 504;

//   constructor(message: string | object = 'Gateway timeout') {
//     super(message);
//   }
// }
