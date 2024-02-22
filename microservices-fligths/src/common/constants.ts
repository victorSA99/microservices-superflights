export enum RabbitMQ {
  PassengerQueue = 'passengers',
  FligthQueue = 'fligths',
}

export enum PassengerMSG {
  CREATE = 'CREATE_PASSENGER',
  FIND_ALL = 'FIND_PASSENGERS',
  FIND_ONE = 'FIND_PASSENGER',
  UPDATE = 'UPDATE_PASSENGER',
  DELETE = 'DELETE_PASSENGER',
}
export enum FligthMSG {
  CREATE = 'CREATE_FLIGTH',
  FIND_ALL = 'FIND_FLIGTHS',
  FIND_ONE = 'FIND_FLIGTH',
  UPDATE = 'UPDATE_FLIGTH',
  DELETE = 'DELETE_FLIGTH',
  ADD_PASSENGER = 'ADD_PASSENGER',
}
