import './App.css';
import { Routes, Route } from "react-router-dom";
import { URI } from './Constants'
  import { Theme } from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import Savings from './app/calculator/savings/Savings';
import CompoundInterst from './app/calculator/compound-interest/CompoundInterst';
import Loan from './app/calculator/loan/Loan';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path={URI + "/"} element={<Savings />} />
          <Route path={URI + "/tinh-lai-tiet-kiem"} element={<Savings />} />
          <Route path={URI + "/tinh-lai-kep"} element={<CompoundInterst />} />
          <Route path={URI + "/tinh-khoan-vay"} element={<Loan />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
