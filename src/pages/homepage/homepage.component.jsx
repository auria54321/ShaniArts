import React from 'react';

import './homepage.styles.css';

import Subjects from '../../components/subjects/subjects.component';

const HomePage = () => (
    <div className='homepage'>
        <h1 className='original'>Originals</h1>
        <Subjects/>
    </div> 
)

export default HomePage;