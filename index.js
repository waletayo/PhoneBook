class PhoneBook {
  constructor() {
    this.table = [];
  }

  _addItem(data) {
    return this.table.unshift(data);
  }

  createPhoneBook(value) {
    const phoneObj = Object.keys(value);
    const isIncluded = ["phoneNumber", "dateCreated", "email"].every((v) =>
      phoneObj.includes(v)
    );
    if (isIncluded) {
      const checkUsername = (value) => value.phoneNumber === value.phoneNumber;
      if (this.table.some(checkUsername)) {
        return "PhoneNumber already exists ";
      }
      return this.table.push(value);
    }
    return "Provide PhoneBook details";
  }
  getPhoneDetails(value) {
    return this.table.find((ph) => ph.phoneNumber === value);
  }
  listAllPhoneBook() {
    return this.table;
  }
}

const phoneBookInstance = new PhoneBook();

console.log(
  "Create New Phonebook Record",
  phoneBookInstance.createPhoneBook({
    phoneNumber: "09052707218",
    email: "test@mikro",
    dateCreated: Date.now(),
  })
); //should create new record

console.log(
  "Duplicate PhoneBook Record",
  phoneBookInstance.createPhoneBook({
    phoneNumber: "09052707218",
    email: "test@mikro",
    dateCreated: Date.now(),
  })
); // should return PhoneNumber already exists

console.log("Validate Provided data", phoneBookInstance.createPhoneBook({})); // should return Provide PhoneBook details



console.log(
  "Validate Provided data",
  phoneBookInstance.createPhoneBook({ email: "test@mikro" })
); // should return Provide PhoneBook details

console.log("Get PhoneBook Record", phoneBookInstance.getPhoneDetails("09052707218"))// should return phoneBook Object
console.log("Get Invlaid PhoneBook Record", phoneBookInstance.getPhoneDetails("08052707226")) // should return undefined
console.log("Get all PhoneBook", phoneBookInstance.listAllPhoneBook()) // should return all PhoneBook

