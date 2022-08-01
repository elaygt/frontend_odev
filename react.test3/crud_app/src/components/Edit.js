import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

	const [ProjectName, setProjectName] = useState('');
	const [TaskName, setTaskName] = useState('');
	const[id,setid] = useState('');
	const [Status, setStatus] = useState('');

	let history = useNavigate()
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	//editlemek için fonksiyon
	const handelSubmit = (e) =>{
		e.preventDefault(); 
		
		let a = array[index] 
		
		a.TaskName = TaskName
		a.ProjectName = ProjectName
        a.Status = Status

		history('/')//anasayfaya gönderir
	}


	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		setProjectName(localStorage.getItem('ProjectName'))
		setTaskName(localStorage.getItem('TaskName'))
		setStatus(localStorage.getItem('Status'))
		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

			{/* setting a name from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control value={ProjectName}
							onChange={e => setProjectName(e.target.value)}
							type="text" placeholder="Enter ProjectName" />
			</Form.Group>

			{/* setting a age from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control value={TaskName}
							onChange={e => setTaskName(e.target.value)}
							type="text" placeholder="Enter TaskName" />
			</Form.Group>

			{/* setting a age from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control value={Status}
							onChange={e => setStatus(e.target.value)}
							type="text" placeholder="EnterStatus" />
			</Form.Group>

			{/* Hadinling an onclick event running an edit logic */}
			<Button
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="sm" color='red'>
				Update
			</Button>



			{/* Redirecting to main page after editing */}
			<Link className="d-grid gap-2" to='/'>
			<Button variant="outline-info" size="sm">Home</Button>
			</Link>
		</Form>
	</div>
)
}

export default Edit
