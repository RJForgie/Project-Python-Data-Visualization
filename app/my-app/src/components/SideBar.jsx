import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu id="sidebar" style={{zIndex: `100`, position: `absolute`}}>
        <a id="home" className="menu-item">January</a>
        <a id="about" className="menu-item">February</a>
        <a id="about" className="menu-item">March</a>
      </Menu>
    );
  }
}

export default Sidebar
