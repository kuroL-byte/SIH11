import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fs from 'fs'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [textBoxValue, setTextBoxValue] = useState('')
  const [savedTexts, setSavedTexts] = useState([])
  const [showSavedTexts, setShowSavedTexts] = useState(false)
  const [answers, setAnswers] = useState([])
  const [receivedAnswers, setReceivedAnswers] = useState('')
  const [showReceivedAnswers, setShowReceivedAnswers] = useState(false) 

  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value)
  }
  
  const handleSaveAndSendToChatGPT = () => {
    setSavedTexts([...savedTexts, textBoxValue])
    setTextBoxValue('') 
    saveTextsToFile(savedTexts) 
  
    const prompts = savedTexts.map((text) => ({ prompt: text }));
    axios.post('https://api.openai.com/v1/chat/completions', prompts, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
      }
    })
    .then(response => {
      
      setReceivedAnswers('Booking Confirmed');
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  const [availableBookings, setAvailableBookings] = useState(100)
  const handleDecrementBookings = () => {
    setAvailableBookings(availableBookings - 1)
  }
  const handleShowSavedTexts = () => {
    setShowSavedTexts(!showSavedTexts) 
  }

  const handleShowReceivedAnswers = () => {
    setShowReceivedAnswers(!showReceivedAnswers) 
  }

  const saveTextsToFile = (texts) => {
    fs.writeFileSync('saved_texts.txt', texts.join('\n'))
  }
  const [showBookingCount, setShowBookingCount] = useState(true);
  return (
    <>
      <div className="top-right-buttons">
      
  <button onClick={() => window.open('login\login.html', '_blank')} className="login-button">Login</button>
  <button onClick={() => window.open('signup\signup.html', '_blank')} className="signup-button">Signup</button>
  <button onClick={handleShowSavedTexts} className="history-button">Show history</button>
        </div>
        <div className="chatbot-header">
        <img src={'chatbot1.png'}  className="chatbot-logo" />
      <h1>Chatbot</h1>
      
      </div>
      <div className="card">
        <input
          type="text"
          value={textBoxValue}
          onChange={handleTextBoxChange}
          placeholder="Type a message..."
        />
      <button onClick={handleSaveAndSendToChatGPT} className="search-button">search </button>
      
      <button onClick={handleShowReceivedAnswers} className="availability-button">Show availability</button>
    
        
        {showSavedTexts && (
          
          <ul>
            {savedTexts.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        )}
        
        {showReceivedAnswers && (
  <div className="centered-container">
    <h2>Bookings available</h2>
    <textarea
      value={availableBookings}
      readOnly={true}
      className="booking-count"
    />
    <button onClick={() => {
      handleDecrementBookings();
      window.open('http://127.0.0.1:5500/congos/congofile/bookingconfirm.html', '_blank');
      setShowBookingCount(false);
    }}>
     Book Now
    </button>
  </div>
)}
      </div>
    </>
  )
}

export default App