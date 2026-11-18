import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("0");
  const [people, setPeople] = useState("1");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const billAmount = parseFloat(bill);
    const tipPercent = parseFloat(tip);
    const numPeople = parseInt(people);

    // Validation
    if (isNaN(billAmount) || billAmount <= 0 || isNaN(numPeople) || numPeople < 1) {
      setError("Please enter a valid bill and number of people.");
      setResult(null);
      return;
    }

    const tipAmount = (billAmount * tipPercent) / 100;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numPeople;

    setError("");
    setResult({
      tipAmount: tipAmount.toFixed(2),
      totalBill: totalBill.toFixed(2),
      perPerson: perPerson.toFixed(2),
    });
  };

  return (
    <div className="card">
      <h2>Bill Splitter</h2>

      <label htmlFor="bill">Bill amount (Rs.)</label>
      <input
        id="bill"
        type="number"
        placeholder="e.g. 1200"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label htmlFor="tip">Tip</label>
      <select id="tip" value={tip} onChange={(e) => setTip(e.target.value)}>
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
      </select>

      <label htmlFor="people">Number of people</label>
      <input
        id="people"
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <button onClick={handleCalculate}>Calculate</button>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <p>Tip amount: Rs. {result.tipAmount}</p>
          <p>Total bill: Rs. {result.totalBill}</p>
          <p>Each person pays: Rs. {result.perPerson}</p>
        </div>
      )}
    </div>
  );
}

export default App;