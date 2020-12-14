export class Pet {
  public location: string;
  public breed: string;
  public age: number;
  public phoneNumber: string;
  public description: string;
  public imagePath: string;

  constructor(location: string, breed:string, age: number, phoneNumber: string, description: string, imagePath: string){
    this.location = location;
    this.breed = breed;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.imagePath = imagePath;

  }
}
