import PropTypes from 'prop-types';

const Course = ({course, handleAddListItem}) => {
    const {title, image, description, dollar_icon, frame_icon, price, credit} = course;
    return (
        <div className=''>
            <div className="h-[530px] bg-stone-10 shadow-md rounded-lg relative">
  <figure><img className='px-2 pt-2 w-full h-44 mx-auto' src={image}  alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-base'>{description}</p>
    <div className='flex'>
        <img src={dollar_icon} alt="" />
        <p className='text-xs'>Price: {price}</p>
        <img src={frame_icon} alt="" />
        <p>Credit: {credit}</p>
    </div>
    <div className="card-actions absolute bottom-5 w-3/4">
      <button onClick={()=>handleAddListItem (course)} className=" bg-sky-500 w-full py-1 px-3 text-center rounded-md">Select</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

Course.propTypes = {
    course : PropTypes.object,
    handleAddListItem: PropTypes.func
};

export default Course;