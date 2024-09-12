import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      {children}
    </div>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Dashboard;
