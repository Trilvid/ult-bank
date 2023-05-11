import React from 'react';

function Transfer() {
  function displayPin(e) {
    e.preventDefault();
    if (document.querySelector('input').value === "") {
      alert("tis fileds are empty")
    }
    else {
    document.getElementById("hey").style.display="flex";
    document.getElementById('selfBtn').style.display="none"
    }
  }
  return (
    <>
    <div className="space">
      <h1>transfer funds</h1>
    </div>
    <div className="contain">
      <div className="transfer">
        <form action="#">
          <span>
            <label htmlFor="num">Amount:</label>
            <input type="number" name="amount" id="num" required />
          </span>

          <span>
            <label htmlFor="nom">bank:</label>
            <input type="text" name="amount" id="nom" required/>
          </span>

          <span>
            <label htmlFor="acct">Account number:</label>
            <input type="number" name="amount" id="acct" required />
          </span>

        </form>
          <span id='selfBtn'>
            <button onClick={displayPin}><span>proceed</span></button>
          </span>

        <form action="" className="enterPin" id='hey'>
          <span>
            <p>enter pin</p>
            <input type="number" name="pin" id="pin" required />
          </span>

          <span>
            <button><span>transfer</span></button>
          </span>
        </form>
      </div>
    </div>
    </>
  );
}

export default Transfer;