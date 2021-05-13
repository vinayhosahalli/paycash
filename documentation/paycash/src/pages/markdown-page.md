# PayCash

> To cater for the needs of those looking to accept Bitcoin Cash payments, PayCash provides buttons and widgets with QR code to facilitating the transaction process. This is enabled via a Bitcoin Cash gateway, a decentralised payment platform which allows merchants to accept Bitcoin Cash transactions at a lower cost, and faster than Bitcoin.



[![NPM](https://img.shields.io/badge/Paycash-npm%401.0.0-green)](https://www.npmjs.com/package/@paycash/paycash)

## Install

### npm
```bash
npm install --save @paycash/paycash
```
### JavaScript


```
<script src="https://unpkg.com/@paycash/paycash/dist/paycash.js"></script>

```
## Usage
### HTML
> replacing YOUR_ADDRESS_HERE with an address from your Bitcoin Cash Address
#### Button
```
<script src="https://unpkg.com/@paybutton/paybutton@^1.1/dist/paybutton.js"></script>
<div class="paybutton" to="YOUR_ADDRESS_HERE"></div>
```
#### Widget
```
<script src="https://unpkg.com/@paybutton/paybutton@^1.1/dist/paybutton.js"></script>
<div class="paybutton-widget" to="bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp"></div>
```

#### Parameters
```
to="bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp"  <!-- BCH recive Address -->
amount=100                                                   <!-- Amount will convert to BCH -->                          
currency="USD"                                               <!-- fiat currency -->
text="Purchase"                                              <!-- text on Button -->
goal-amount="10"                                             <!-- gole amount -->
success-text="Thanks!"                                       <!-- success text -->
on-success="successCallback"                                 <!-- call back funcation -->
on-transaction="transactionCallback"                         <!-- call back funcation -->
random-satoshis="true"                                       <!--random satoshi for uniqueness  -->
hide-toasts= "false"                                         <!-- to hide deafult tosts -->
    
```
### React 
```
npm i --save @paybutton/react
import { PayButton } from '@paybutton/react'

function App() {
  function mySuccessFunction() {
    console.log("Success!")
  }

  const to = 'bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp'
  const amount = 5
  const currency = 'USD'
  const text = 'Help Has To Help Other'
  const onSuccess = mySuccessFunction()

  return <PayButton
    to={to}
    amount={amount}
    currency={currency}
    text={text}
    onSuccess={onSuccess}
  />
}
```
#### Button
```
import { Widget as PayButtonWidget } from '@paybutton/react'

function App() {
  return <PayButtonWidget
    to='bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp'
  />
}
export default App;
```
#### Widget
```
import { Widget as PayButtonWidget } from '@paybutton/react'

function App() {
  return <PayButtonWidget
    to='bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp'
  />
}
export default App;
```

#### Parameters
```
to="bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp"  <!-- BCH recive Address -->
amount=100                                                   <!-- Amount will convert to BCH -->                          
currency="USD"                                               <!-- fiat currency -->
text="Purchase"                                              <!-- text on Button -->
goal-amount="10"                                             <!-- gole amount -->
success-text="Thanks!"                                       <!-- success text -->
on-success="successCallback"                                 <!-- call back funcation -->
on-transaction="transactionCallback"                         <!-- call back funcation -->
random-satoshis="true"                                       <!--random satoshi for uniqueness  -->
hide-toasts= "false"                                         <!-- to hide deafult tosts -->
    
```

### JavaScript
```
<script src="https://unpkg.com/@paybutton/paybutton@^1.1/dist/paybutton.js"></script>

<div id="my_button"></div>

<script>
function mySuccessFunction(txid, amount) {
  console.log( { txid, amount } );
}

function myTransactionFunction(txid, amount) {
  console.log( 'Received: ' + amount );
}

var config = {
  to: 'bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp',
  amount: 5,
  currency: 'USD',
  text: 'Tip Us a Coffee!',
  successText: 'Help Has To Help Other',
  onSuccess: mySuccessFunction,
  onTransaction: myTransactionFunction,
  randomSatoshis: true
};

PayButton.render(document.getElementById('my_button'), config);
</script>
```
#### Widget
```
import { Widget as PayButtonWidget } from '@paybutton/react'

function App() {
  return <PayButtonWidget
    to='bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp'
  />
}
export default App;
```

#### Parameters
```
to="bitcoincash:qrmm7edwuj4jf7tnvygjyztyy0a0qxvl7q9ayphulp",  <!-- BCH recive Address -->
amount=100,                                                   <!-- Amount will convert to BCH -->                          
currency="USD",                                               <!-- fiat currency -->
text="Purchase",                                              <!-- text on Button -->
goal-amount="10",                                             <!-- gole amount -->
success-text="Thanks!",                                       <!-- success text -->
on-success="successCallback",                                 <!-- call back funcation -->
on-transaction="transactionCallback",                         <!-- call back funcation -->
random-satoshis="true",                                       <!--random satoshi for uniqueness  -->
hide-toasts= "false",                                         <!-- to hide deafult tosts -->
    
```
## License

MIT 

## Donation


### Flipstarter Campaign


## Team 

team@paycash.host

