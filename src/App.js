import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [microfrontendButton, setMicrofrontendButton] = useState(null);

  console.log(microfrontendButton,'microfrontendButton')

  useEffect(() => {
    axios.get('http://localhost:3000/api/button?label=LabelPorParametro').then(response => {
      console.log(response,'response')
      const componentHTML = response.data;
      setMicrofrontendButton(componentHTML);
    });
  }, []);

  return (
    <div className="App">
      {microfrontendButton && (
        <div dangerouslySetInnerHTML={{ __html: microfrontendButton }} />
      )}
    </div>
  );
}

export default App;