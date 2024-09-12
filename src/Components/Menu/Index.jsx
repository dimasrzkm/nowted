import PropTypes from "prop-types";

const Menu = (props) => {
  const { children } = props;
  return (
    <div className="text-sm flex flex-col space-y-4 text-gray-400">
      {children}
    </div>
  );
};

const MenuHeader = (props) => {
  const { title } = props;
  return <h4>{title}</h4>;
};

const MenuHeaderWithIcon = (props) => {
  const { children } = props;
  return <div className="flex justify-between items-center">{children}</div>;
};

const MenuBody = (props) => {
  const { children } = props;
  return <div className="flex flex-col space-y-4 overflow-auto max-h-36 ">{children}</div>;
};

const MenuItem = (props) => {
  const { children } = props;
  return <div className="flex gap-x-4">{children}</div>;
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

MenuHeaderWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

MenuHeader.propTypes = {
  title: PropTypes.node.isRequired,
};

MenuBody.propTypes = {
  children: PropTypes.node.isRequired,
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

Menu.Header = MenuHeader;
Menu.HeaderIcon = MenuHeaderWithIcon;
Menu.Body = MenuBody;
Menu.Item = MenuItem;

export default Menu;
