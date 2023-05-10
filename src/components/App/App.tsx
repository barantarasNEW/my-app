import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Tip from '../Tip/Tip';
import Workspace from '../Workspace/Workspace';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Tip />} /> 
      <Route path="/main">
        <Route index element={<Navigate to="/" replace />}/>  
        <Route path=":id" element={<Workspace />} />  
      </Route> 
      <Route path="*" element={<p>Not Found</p>} />
    </Route>
  </Routes>
);

export default App;
