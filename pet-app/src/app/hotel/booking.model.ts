export class Booking {
  public ownerName: string;
  public breed: string;
  public age: number;
  public phoneNumber: string;
  public startDate: Date;
  public endDate: Date;

  constructor(ownerName: string, breed:string, age: number, phoneNumber: string, startDate: Date, endDate: Date){
    this.ownerName = ownerName;
    this.breed = breed;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.startDate = new Date();
    this.endDate = new Date();

  }
}
