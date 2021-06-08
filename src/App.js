import { ScaledBox } from './components/scaled-box/scaled-box.component';
import { ScaledButton } from './components/scaled-button/scaled-button.component';
import { ScaledTitle } from './components/scaled-title/scaled-title.component';
import { ScaledSlider } from './components/scaled-slider/scaled-slider.component';

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
