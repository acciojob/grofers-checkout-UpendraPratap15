const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // select all price cells
  const priceCells = document.querySelectorAll(".prices"); // 👈 works even if values change [web:1]

  let total = 0;
  priceCells.forEach((cell) => {
    total += Number(cell.textContent); // convert text to number and add [web:1]
  });

  const table = document.querySelector("table");

  // if total row already exists, remove it (so multiple clicks still work) [web:1]
  const oldTotalRow = document.getElementById("total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // one cell spanning both columns [web:1]
  totalCell.textContent = `Total: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow); // add row at end of table [web:1]
};

getSumBtn.addEventListener("click", getSum);
