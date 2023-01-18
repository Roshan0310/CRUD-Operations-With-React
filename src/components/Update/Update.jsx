import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Update() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    const sendDataToApi = () => {
        axios.put(`https://63c12ad3376b9b2e6474a88a.mockapi.io/crud/${ID}`,
            {
                firstName,
                lastName
            }).then(() => {
                navigate('/');
            })
    }
    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem("ID"));
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name='fname' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name='lname' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>

                <Button primary type='submit' onClick={sendDataToApi}>Update</Button>
                <Button primary>
                    <Link to='/' style={{ color: '#FFF' }}>Cancel</Link>
                </Button>
            </Form>
        </div>
    )
};
export default Update;