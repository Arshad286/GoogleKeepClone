import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SwipeDrawer from './SwipeDrawer'
import Notes from './Notes/Notes'
import { Box } from '@mui/material'
import Archives from './Archive/Archives';
import DeleteNotes from './Delete/DeleteNotes';



const Home = () => {
  return (
    <Box style = {{display: 'flex', width : "100%"}}>
      <Router>
      <SwipeDrawer/>
      <Routes>        
                    <Route path='/' element={<Notes />} />
                    <Route path='/archive' element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes/>} />
                </Routes>

      </Router>
    </Box>
  )
}

export default Home