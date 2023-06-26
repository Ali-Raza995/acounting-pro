import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ItemPage from './pages/itemsPagegit';

function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/items" element={<ItemPage />} />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
