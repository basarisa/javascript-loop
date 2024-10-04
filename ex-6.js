// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

console.log(reversedCompanyName);
for (let i = companyName.length-1; i >= 0; i--) {
  reversedCompanyName = reversedCompanyName + companyName[i];
}
console.log(reversedCompanyName);

console.log(companyName.length)//15

console.log(companyName[14])//14

