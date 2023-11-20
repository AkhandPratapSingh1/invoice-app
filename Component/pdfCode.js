import dateFormat, { masks } from "dateformat";

function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const PdfCode = (
  name,
  Address,
  Mobile_No,
  Quantity,
  Invoice,
  Product,
  Total,
  ReceivedBalance,
  PaymentType,
  RemainingBalance
) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>Akhand Pratap Invoice App</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        color: #333;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
      }

      .container {
        min-height: auto;
        width: 100%;
        height: 97vh;
        border: 2px solid #000;
        background-color: #fff;
      }

      .header {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: #fff;
      }

      .data-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2rem;
        padding-left: 20px;
        color: #fff;
      }

      .subtitle {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        color: #ccc;
      }

      .logo {
        height: 90px;
        width: 90px;
        margin-right: 15px;
      }

      hr {
        border-color: #ccc;
      }

      .info-container {
        width: 100%;
        height: auto;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }

      .info-section {
        width: 50%;
        align-items: flex-start;
      }

      .invoice-user {
        color: #333;
      }

      .invoice-details {
        align-items: flex-end;
      }

      .invoice-details p {
        color: #333;
      }

      .table-container {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
      }

      th {
        background-color: #ff003e;
        color: #fff;
      }

      .total-section {
        width: 100%;
        align-self: flex-end;
        display: flex;
        flex-direction: row;
      }

      .total-label {
        width: 40%;
      }

      .account-details {
        height: auto;
        padding: 20px;
        color: #333;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="data-title">
          Akhand Pratap Invoice App
        </div>
        <div class="subtitle">
          Demo Invoice App - A React Native Android App.
        </div>
        <img class="logo" src="https://i.ibb.co/nLdT74K/Tech.png" />
      </div>
      <hr />
      <hr />

      <div class="info-container">
        <div class="info-section">
          <p class="invoice-user">
            Bill To: <br/>
            Name: ${name} <br/>
            Address: ${Address} <br/>
            Phone No: +91 ${Mobile_No}
          </p>
        </div>
        <div class="info-section invoice-details">
          <p>Invoice No: ${Invoice}<br/>
          Date: ${dateFormat(Date.now(), "dd-mm-yyyy")}<br/>
          Time: ${GetTime(new Date())}</p>
          <br/>
          <br/>
          <p>Mobile No: <br/>
          +91 6397421539<br/>
          +91 9759401072
          </p>
        </div>
      </div>
      <hr/>
      <hr/>

      <div class="table-container">
        <table>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Price(Per)</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>1</td>
            <td>${Product}</td>
            <td>${parseFloat(parseFloat(Total) / parseFloat(Quantity)).toFixed(2)}</td>
            <td>${Quantity}</td>
            <td>₹ ${Total}</td>
          </tr>
        </table>

        <div class="total-section">
          <div class="total-label"></div>
          <table>
            <tr>
              <th>Grand Total:</th>
              <td>₹ ${Total}</td>
            </tr>
            <tr>
              <th>Received Balance:</th>
              <td>₹ ${ReceivedBalance}</td>
            </tr>
            <tr>
              <th>Remaining Balance:</th>
              <td>₹ ${RemainingBalance}</td>
            </tr>
            <tr>
              <th>Payment Method:</th>
              <td>${PaymentType}</td>
            </tr>
          </table>
        </div>
      </div>
      <hr/>
      <hr/>

      <div class="account-details">
        <p>Account Details - <br/>
        Bank Name: DEMO BANK, AGRA<br/>
        Bank Account no: 123456789<br/>
        Bank IFSC code: DEMO0002411</p>
      </div>

    </div>
  </body>
</html>


`;

const style = `
    .container {
      margin : 15px;
      border : solid 2px #000
    }
`;

export { PdfCode };