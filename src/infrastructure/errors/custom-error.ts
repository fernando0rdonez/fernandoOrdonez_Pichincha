export abstract class CustomError extends Error {
  constructor (message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

abstract statusCode: number;

abstract serializateError(): {
message: string;
fields?: {
  message: string;
  field: string;
}[];
};
}
