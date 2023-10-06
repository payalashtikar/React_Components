import './App.css';
import DarkTheme from './dark-them-component/DarkTheme';
import Hide_Show from './hide-and-show-content/Hide_Show';
import PaginationComponent from './pagination-component/PaginationComponent';
import SearchComponent from './search-component/SearchComponent';

function App() {
  return (
    <div className='App'>
      {/* <PaginationComponent/> */}
      {/* <SearchComponent/> */}
      {/* <DarkTheme/> */}
      <Hide_Show/>
    </div>
  );
}

export default App;
