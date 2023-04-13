import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New/New'
import { Profile } from '../pages/Profile/Profile'
import { Home } from '../pages/Home/Home'
import { Details } from '../pages/Details/Details'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/new' element={<New />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}

