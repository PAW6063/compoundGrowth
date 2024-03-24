const button = document.getElementById("calculate");
button.addEventListener("click", (event) => {
  
  document.getElementById("table").innerHTML = "";
  let title = document.createElement('tr');
  let th1 = document.createElement(`th`);
  th1.innerHTML = "Total";
  let th2 = document.createElement(`th`);
  th2.innerHTML = "Profit";
  let th3 = document.createElement(`th`);
  th3.innerHTML = "Total Profit";

  title.append(th1);
  title.appendChild(th2);
  title.appendChild(th3);

  document.getElementById("table").append(title);

  let total = parseFloat(document.getElementById("total").value);
  let amountAdded = parseFloat(document.getElementById("amountAdded").value);
  let percent = parseFloat(document.getElementById("percent").value) / 100.0;
  let time = parseInt(document.getElementById("time").value);
  let growth = parseInt(document.getElementById("growth").value);
  let profit = [0];
  let previous = [total];

  for(let i = 1; i < time + 1; i++){
    
    for(let j = 0; j < growth; j++){
      total += total * percent;
    }
    total += amountAdded;
    
    previous.push(Number(total).toFixed(2));
    profit.push(Number((total - previous[i - 1]) - (amountAdded * i)).toFixed(2));
    
    let row = document.createElement('tr');

    let td1 = document.createElement(`td`);
    td1.innerHTML = total.toFixed(2);
    let td2 = document.createElement(`td`);
    td2.innerHTML = Number(profit[i]).toFixed(2);
    let td3 = document.createElement(`td`);
    td3.innerHTML = (previous[i] - previous[0]).toFixed(2);

    row.append(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    document.getElementById("table").append(row);
  }

});
