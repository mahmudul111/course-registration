
import PropTypes from 'prop-types';

const Listitem = ({listItem}) => {
    const {title} = listItem
    return (
        <li className='text-base font-medium'>{title}</li>
    );
};

Listitem.propTypes = {
    listItem:PropTypes.object
};

export default Listitem;