import React from 'react';

import './subjects.styles.scss';

class Subjects extends React.Component {
    constructor() {
        super()
        this.state = {
            subjects: [ 
                {
                    id: 1,
                    title: 'Pencil',
                    imgUrl: 'https://i.ibb.co/cTLqt1j/option11.jpg'
                },
                {
                    id: 2,
                    title: 'Watercolor',
                    imgUrl: 'https://i.ibb.co/cTLqt1j/option11.jpg'
                },
                {
                    id: 3,
                    title: 'Acrylic',
                    imgUrl: 'https://i.ibb.co/cTLqt1j/option11.jpg'
                },
            ]
        }
    }

    render() {
        return (
            <div className='subjects-container'>{
                this.state.subjects.map(subject => (                    
                    <div className='option' key={subject.id}>{subject.title} </div>
                ))
            }
            </div>
        )
    }
}

export default Subjects;