import React from 'react'
import Wrapper from './components/Wrapper'
import Main from './components/Main'
import Navigationbar from './components/Navigationbar';



const App = () => (
  <>
    <Navigationbar />

    <Wrapper>
      <Main />
    </Wrapper>

  </>
);

export default App;
