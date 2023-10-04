import PropTypes from 'prop-types';
import Listitem from './Listitem';

const Listitems = ({listItems, remaining, total}) => {
    return (
        <div>
            <h2 className='my-3 text-xl font-semibold'>Credit Hour Remaining: <span>{remaining}</span>hr</h2>
            <hr />
            <h2 className='my-5 text-4xl font-semibold'>Course Name</h2>
            <ol className='list-decimal'>
            {
                listItems.map((listItem, idx) => <Listitem key={idx} listItem = {listItem} ></Listitem>)
            }
            </ol>
            <hr /> 
            <h2 className='mt-3 text-xl font-semibold'>Total Credit Hour: {total}hr</h2>
        </div>
    );
};

Listitems.propTypes = {
    listItems: PropTypes.array,
    remaining: PropTypes.array,
    total: PropTypes.array
};

export default Listitems;