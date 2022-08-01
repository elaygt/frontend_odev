import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,} from 'react-router-dom';

function hello() {
    return(

    
<Link className="d-grid gap-2" to='/create'>
<Button variant="primary" size="lg">Create</Button>
</Link>

    )
}

export default hello




