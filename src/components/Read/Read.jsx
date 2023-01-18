import './Read.css'
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`https://63c12ad3376b9b2e6474a88a.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      })
  }, [])

  const setData = (id, firstName, lastName) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
  }

  const getData = () => {
    axios.get(`https://63c12ad3376b9b2e6474a88a.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://63c12ad3376b9b2e6474a88a.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <div  className='table1'>
      
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to='/update'>
                    <Button color="green" onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}

        </Table.Body>
      </Table>
      <Button className="btn btn-outline-primary">
        <Link to='/Create' style={{ color: 'black' }}>Add New</Link>
      </Button>
    </div>
  )
}
export default Read;