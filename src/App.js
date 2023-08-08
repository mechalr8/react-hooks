import './App.css';
import React from 'react';
import EffectTutorials from './UseEffect/EffectTutorials';
import ReducerTutorials from './UseReducer/ReducerTutorials';
import StateTutorials from './UseState/StateTutorials';
import RefTutorials from './UseRef/RefTutorials';
import LayoutEffectTutorials from './UseLayoutEffect/LayoutEffectTutorials';
import ImperativeHandleTutorials from './UseImperativeHandle/ImperativeHandleTutorials';
import ContextTutorials from './UseContext/ContextTutorials';
import MemoTutorials from './UseMemo/MemoTutorials';
import CallbackTutorials from './UseCallback/CallbackTutorials';

function App() {
  return (
    <div className="App">
      <ContextTutorials/>
    </div>
  );
}

export default App;
