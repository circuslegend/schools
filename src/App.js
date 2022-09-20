
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Bitem from './Components/Bitem'

function App() {
  return (
    <div className="App">
      <div className='Main'>
      <div className='TypeText'>
        <TypeAnimation
        sequence={[
          '01000010', // B
          2000, 
          '01001001', // I
          2000, 
          '01000111', // G
          2000, 
          '01010100', // T
          2000, 
          '01000001', // A
          2000, 
          '01000001', // S
          2000, 
          '01010100', // T
          2000, 
          '01011001', // Y
          2000, 
          '66 - 73 - 71 ', // B I G
          2000, 
          '84 - 65 - 83 - 84 - 89 ', // T A S T Y
          2000,   
          ';))))', 
          4000,  
        ]}
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2rem' }}
      />
    </div>
    <div className='btn'>
    <AnchorLink href='#anchor'><FaChevronDown/></AnchorLink>
    </div>
      </div>
      <div className='Blocks' id="anchor">
        <div className='Name'><h1>IT History</h1></div>
          <Bitem text={`1642 - машина для підрахунків Блеза Паскаля. `} anim={`backInLeft`} trues={true}/>
          <Bitem text={`1671 - Німецький математик Густав Лейбніц винайшов арифмометр, який виконував не дві, а чотири дії.`} anim={`backInRight`} trues={true}/>
          <Bitem text={`1930-i - перші громіздкі, незручні у використанні, але прогресивні для свого часу, комп'ютери ЕОМ`} anim={`backInLeft`} trues={true}/>
          <Bitem text={`1960-і - винахід транизстору. Тепер габарити комп'ютерів значно зменшилися, а їх пам'ять становила кілька десятків тисяч слів. `} anim={`backInRight`} trues={true}/>
          <Bitem text={`1970-і - комп'ютер, нарешті, став персональним і доступним. Це стало можливим, бо в 1972 році був створений 8-розрядний мікропроцесор, який використали в комп'ютерах. `} anim={`backInLeft`} trues={true}/>
          <Bitem text={`З кінця 60-х і до кінця 70-х - епос інтегральних схем. Тоді комп'ютер наблизився до того ПК, який ми маємо сьогодні.`} anim={`backInRight`} trues={true}/>
          <Bitem text={`У другій половині 70-х років створення комп'ютера, який був доступним кожному, перестало бути проблемою.`} anim={`backInLeft`} trues={true}/>
          <Bitem text={`Але й зараз розвиток комп'ютера не закінчився і, цілком можливо, що вже завтра цей пристрій зміниться до невпізнання...`} anim={`backInRight`} trues={false}/>
      </div>
      <div className='bye'>
          Дякую за увагу !
          В двійковому коді є ребус {`:)`} 
      </div>
    </div>
  );
}

export default App;
