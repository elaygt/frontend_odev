import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

	const [ProjectName, setProjectName] = useState('');
	const [TaskName, setTaskName] = useState('');
	const [Status, setStatus] = useState('');


	// sayfalar arasında yönlendirme
	let history = useNavigate();

	// post/entry
	const handelSubmit = (e) =>{
		e.preventDefault(); // Prevent reload

		const ids = uuid() // unique id oluştur
		let uni = ids.slice(0,8) 

		
		let a = ProjectName, b=TaskName, c=Status
		array.push({id:uni,ProjectName:a,TaskName:b,Status:c})


	//anasayfaya yönlendirme
	history('/')
		
	}

return (
	<div >
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

{/* Fetching a value from input textfirld
in a setname using usestate*/}
<Form.Group className="mb-3" controlId="formBasicProjectName">
	<Form.Control onChange={e => setProjectName(e.target.value)}
				type="text"
				placeholder="Enter ProjectName" required/>
</Form.Group>


	{/* Fetching a value from input textfirld in
	a setage using usestate*/}
<Form.Group className="mb-3" controlId="formBasicTaskName">
	<Form.Control onChange={e => setTaskName(e.target.value)}
				type="text"
				placeholder="Enter TaskName" required/>
</Form.Group>

{/* Fetching a value from input textfirld in
	a setage using usestate*/}
<Form.Group className="mb-3" controlId="formBasicStatus">
	<Form.Control onChange={e => setStatus(e.target.value)}
				type="text"
				placeholder="Enter Status" required/>
</Form.Group>



	{/* kaydetme butonu */}
<Button
onClick={e => handelSubmit(e)}
	variant="primary" type="submit" size='sm'>
	Submit
</Button>

{/* anasayfaya yönlendirme */}
<Link className="d-grid gap-2" to='/'>
	<Button style={{color:"#00005c"}} variant="outline-info" size="sm">
	Home
	</Button>
</Link>

</Form>
	</div>
)
}

export default Create
