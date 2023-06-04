import React, { useState, useEffect, useRef } from 'react'
import './../styling/gift.css'
import { TextField, InputLabel } from '@mui/material'
import emailjs from '@emailjs/browser';

function Gift() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_vi3wwbg', 'template_3if17xx', form.current, 'JOKmoWcByn6zBklXt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });



  };

  const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('weddings')))
  const [cardNumber, setCardNumber] = useState()
  const [checkDate, setCheckDate] = useState(false)
  const [newDate, setNewDate] = useState(false)
  const [cardName, setCardName] = useState()
  const [cardExp, setCardExp] = useState()
  const [cardCVC, setCardCVC] = useState()
  const [chosenDate, setChosenDate] = useState();
  const [weddingNames, setWeddingNames] = useState("NOT FOUND")
  const [chosenWedding, setChosenWedding] = useState();
  const [payClick, setPayClick] = useState(false)
  const [arrCardNumber, setArrCardNumber] = useState()
  const [card4Number, setCard4Number] = useState(['*', "*", "*", "*"])
  const [card8Number, setCard8Number] = useState(['*', "*", "*", "*"])
  const [card12Number, setCard12Number] = useState(['*', "*", "*", "*"])
  const [card16Number, setCard16Number] = useState(['*', "*", "*", "*"])
  const [email,setEmail] = useState();
  const [toPay,setToPay] = useState();

  useEffect(() => {
    if (cardNumber != undefined) {
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
  function handleDate(e) {
    setChosenDate(e.target.value)

    setChosenWedding(localData.find((wedding) => chosenDate == wedding.weddingDate))
    setCheckDate(false)

  }

  useEffect(() => {
    chosenWedding != undefined ? setWeddingNames(`${chosenWedding.husbandName} & ${chosenWedding.wifeName}`) : setWeddingNames('NOT FOUND')
  }, [chosenWedding]);

  return (
    <div className='gift-container'>
      <div className="chose-wedding-box">
        <div className='form-chose-wedding'>
          <div className="date-wedding-select">
            <label className='date-lable' htmlFor="date-select">Chose the wedding date: </label>
            <input type="date" name="date-select" id="date-select" onChange={(e) => handleDate(e)} />
            <button className='checked-button' onClick={() => { setCheckDate(true); setChosenWedding(localData.find((wedding) => chosenDate == wedding.weddingDate)); }}>check</button>
          </div>
          {(checkDate) && <div className="open-after-date">
            <div className="married-names">
              <InputLabel>Chosen Wedding</InputLabel>
              <TextField

                value={weddingNames}
                InputProps={{
                  readOnly: true,
                }} />
            </div>
            <div className="user-email">
              <TextField type='email' name='user_email' label="Enter Email" onChange={(e) => setEmail(e.target.value)}></TextField>
            </div>
            <div className="chose-amout-gift">
              <TextField type='number' name='amount' label="Enter Your Gift ($)" onChange={(e) => setToPay(e.target.value)}></TextField>
            </div>
            <div className="pay-button">
              <button className="Btn" onClick={() => setPayClick(!payClick)}>
                Pay
                <svg className="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
              </button>
            </div>
          </div>}


        </div>

      </div>
      {(payClick && weddingNames != "NOT FOUND") && <div className="credit-card-box">
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
          <form ref={form} onSubmit={sendEmail}>

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
                <input className='end-pay-button' type="submit" value="Send" />
              </div>
              <div className='input-none'>
                <input type="text" name='user_email' value={email}  />
                <input type="text" name='full_name' value={cardName}  />
                <input type='text' name='wedding_names' value={weddingNames} />
                <input type='text' name='gift_sum' value={toPay} />
              </div>
            </div>
            
          </form>
        </div>
      </div>}

    </div>
  )
}

export default Gift