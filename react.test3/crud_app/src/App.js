import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';

function App() {
return (
	
	<div className='App'>
      crud operations
	<Router>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/create' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}/>
	</Routes>
	</Router>
    <br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	<br>
	</br>
	crud operations
</div>
);

}

export default App;
