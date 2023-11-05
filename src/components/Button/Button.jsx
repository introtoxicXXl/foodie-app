import PropTypes from 'prop-types';

Button.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.shape.isRequired
};

function Button({ name, icon }) {
    return (
        <div className=''>
            <div className='items-center bg-[#39DB4A] hover:bg-[#39DB4A] btn md:btn-md btn-sm rounded-3xl text-white'>
                {icon} {name}
            </div>
        </div>
    );
}

export default Button;