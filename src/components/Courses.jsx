import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Course from './Course';


const Courses = ({handleAddListItem }) => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setCourses(data))
},[])
    return (
        <div className='w-3/4 grid grid-cols-3 gap-5 '>
            {
                courses.map((course, inx) => <Course key={inx} course={course} handleAddListItem ={handleAddListItem }></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array,
    handleAddListItem: PropTypes.func
};

export default Courses;