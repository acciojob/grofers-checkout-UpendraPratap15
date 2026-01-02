const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceCells = document.querySelectorAll(".prices");
  let total = 0;

  priceCells.forEach((cell) => {
    const val = Number(cell.innerText.trim());
    if (!isNaN(val)) {
      total += val;
    }
  });

  const table = document.querySelector("table");

  // remove previous total row if any
  const oldRow = document.getElementById("total-row");
  if (oldRow) {
    oldRow.remove();
  }

  // create new total row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.id = "ans";      // this is what Cypress looks for
  totalCell.colSpan = 2;     // single cell across both columns
  totalCell.innerText = total; // only the number

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
