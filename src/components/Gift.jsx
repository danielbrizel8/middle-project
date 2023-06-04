import React, { useState, useEffect } from 'react'
import './../styling/gift.css'

function Gift() {
  const [cardNumber, setCardNumber] = useState()
  const [cardName, setCardName] = useState()
  const [cardExp, setCardExp] = useState()
  const [cardCVC, setCardCVC] = useState()
  const [arrCardNumber, setArrCardNumber] = useState()
  const [card4Number, setCard4Number] = useState(['*', "*", "*", "*"])
  const [card8Number, setCard8Number] = useState(['*', "*", "*", "*"])
  const [card12Number, setCard12Number] = useState(['*', "*", "*", "*"])
  const [card16Number, setCard16Number] = useState(['*', "*", "*", "*"])

  useEffect(() => {
    if (cardNumber > 0) {
      setArrCardNumber(cardNumber.split(''))
      setCard4Number([cardNumber[0], cardNumber[1], cardNumber[2], cardNumber[3]])
      setCard8Number([cardNumber[4], cardNumber[5], cardNumber[6], cardNumber[7]])
      setCard12Number([cardNumber[8], cardNumber[9], cardNumber[10], cardNumber[11]])
      setCard16Number([cardNumber[12], cardNumber[13], cardNumber[14], cardNumber[15]])
    }
    console.log(card4Number);
    console.log(arrCardNumber);
  }, [cardNumber]);

  function handleCardNum(e) {
    setCardNumber(e.target.value)
  }
  return (
    <div className='gift-container'>
      <div className="credit-card-box">
        <div className="credit-card">
          <div className="number-card">
            <div>{card4Number}</div>
            <div>{card8Number}</div>
            <div>{card12Number}</div>
            <div>{card16Number}</div>
          </div>
          <div className="ex-date">
            <div>{cardExp}</div>
          </div>
          <div className="card-holder">
            <div>
              {cardName}
            </div>
          </div>
        </div>
        <div className="credit-card-inputs">
          <div className="inputs-box">
            <div className="card-number-input">
              <input placeholder='Card Number' maxLength="16" type="text" onChange={(e) => handleCardNum(e)} />
            </div>
            <div className="card-holder-name">
              <input placeholder='Full Name' type="text" onChange={(e) => setCardName(e.target.value.toUpperCase())} />
            </div>
            <div className="short-input-card">
              <input placeholder='Exp Date' maxLength="5" className='exp-date-input' type="text" onChange={(e) => setCardExp(e.target.value)} />
              <input placeholder='CVC' maxLength="3" className='cvc-number' type="text" onChange={(e) => setCardCVC(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="chose-wedding-box">
        <div>
          here chose the specific wedding
        </div>

      </div>
    </div>
  )
}

export default Gift