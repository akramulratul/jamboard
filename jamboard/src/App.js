import './App.css';
import News from './Component/News';
import Header from './Component/Header/Header';
import TopHeadline from './Component/TopHeadline/TopHeadline';
import Fragment from './Component/Fragment/Fragment';

function App() {
  return (
    <div className="Container">
      <h1>What are</h1>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
      <Fragment></Fragment>
      
    </div>
    
  );
}

export default App;
