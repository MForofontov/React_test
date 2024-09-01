import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseContextAppExample from './UseContextExample/UseContextAppExample.jsx'
import UseRefExample from './UseRefExample/UseRefExample.jsx'
import StopWatch from './UseRefExample/StopWatch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StopWatch />
  </React.StrictMode>,
)
