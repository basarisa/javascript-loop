// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

console.log(reversedCompanyName);
for (let i = companyName.length; i >= 0; i--) {
  reversedCompanyName = reversedCompanyName + companyName[i];
}
console.log(reversedCompanyName);
