import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <Calculator
        name1="/"
        name2="%"
        name3="+/-"
        name4="AC"
        name5="X"
        name6={9}
        name7={8}
        name8={7}
        name9="-"
        name10={6}
        name11={5}
        name12={4}
        name13="+"
        name14={3}
        name15={2}
        name16={1}
        name17="="
        name18="."
        name19={0}

      />
    </div>
  );
}

export default App;
