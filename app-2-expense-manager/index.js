/* 
 Task to perform
 1. collect transaction information
 2. manage arrays of transaction
 3. to seperate debit and credit list
 4. update wallet amount

*/

//dom elements

let CREDIT = "CREDIT";
let DEBIT = "DEBIT";

let db = [];

const form = document.getElementById("expense_form");
const debitTable = document.getElementById("debit_table");
const creditTable = document.getElementById("credit_table");

function handleFormSubmission(e) {
  e.preventDefault();
  const amount = e.target.amount.value;
  const type = e.target.type.value;

  if (!amount || !type) return;

  let transaction = { amount, type, time: Date.now() };
  db.push(transaction);
  calculateWalletAmount();
  renderData(transaction);
}

function calculateWalletAmount() {
  let totalAmount = 0;
  db.map((curr) => {
    let amount = parseFloat(curr.amount);
    if (curr.type === CREDIT) totalAmount += amount;
    else totalAmount -= amount;
  });

  const elm = document.getElementById("wallet");
  elm.innerText = `$${totalAmount}`;
}

function renderData(transaction) {
  const elm = document.createElement("div");
  let className =
    transaction.type === CREDIT
      ? "bg-green-300 text-sm font-medium p-4 flex items-center justify-between mb-2"
      : "bg-red-300 text-sm font-medium p-4 flex items-center justify-between mb-2";

  elm.classList = className;
  elm.innerHTML = `<p>$${transaction.amount}</p><p>${new Date(
    transaction.time
  )}</p>`;
  console.log(elm);

  if (transaction.type === CREDIT) {
    creditTable.insertAdjacentElement("beforeend", elm);
  } else debitTable.insertAdjacentElement("beforeend", elm);
}

//attach handleFormSubmission func. to form submit event
form.addEventListener("submit", handleFormSubmission);
