const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

function formatDateLong(date) {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
