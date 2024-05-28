import { Route, Routes } from 'react-router-dom';
import { Home } from '../home';
import { ToolWithholdingCalculator, Tools } from '../tools';
import { Login } from '../auth';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/tools" element={<Tools />}/>
            <Route path="/tools/withholding-calculator" element={<ToolWithholdingCalculator />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </>
  )
}
