import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {

let history = useNavigate()

function setID(id,ProjectName,TaskName,Status){
	localStorage.setItem('id', id);
	localStorage.setItem('ProjectName', ProjectName);
	localStorage.setItem('TaskName', TaskName);
	localStorage.setItem('Status', Status);
}


// fonksiyon silinir girişi silmek için
function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	array.splice(index,1)
	history('/')
}

return (
	<div style={{margin:'10rem'}}>
		<Table striped bordered hover size="sm">
<thead>
	<tr>
	<th>ProjectName</th>
	<th>TaskName</th>
	<th>Status</th>
	</tr>
</thead>
<tbody>

	{/* Mapping though every element in the array
	and showing the data in the form of table */}
	{array.map((item) => {
return(
<tr>
	<td>{item.ProjectName}</td>
	<td>{item.TaskName}</td>
	<td>{item.Status}</td>	
	{/* getting the id,ProjectName,TaskName and status for storing these
		value in the jsx with onclick event */}
	<td><Link to={`/edit`}><Button onClick={(e) =>
	setID(item.id,item.ProjectName,item.TaskName,item.Status)} variant="outline-success">
		Update</Button></Link></td>

	{}
	<td><Button onClick={e => deleted(item.id)}
	variant="outline-dark">Delete</Button></td>
	</tr>
)})}
</tbody>
</Table>

{}
<Link className="d-grid gap-2" to='/create'>
<Button variant="primary" size="sm">Create</Button>
</Link>

	</div>
	
)
}

export default Home
