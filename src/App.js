import { ScaledBox } from './components/ScaledBox/ScaledBox';
import { ScaledButton } from './components/ScaledButton/ScaledButton';
import { ScaledTitle } from './components/ScaledTitle/ScaledTitle';
import { ScaledSlider } from './components/ScaledSlider/ScaledSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ScaledBox>
         <ScaledTitle>Title</ScaledTitle>
         <ScaledButton>SCALED</ScaledButton>
         <ScaledSlider/>
       </ScaledBox>
      </header>
    </div>
  );
}

export default App;
