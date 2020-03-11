import React from 'react'
import { Modal, Button,Range } from "react-materialize"

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }
  handleDelete = () => {
    console.log("handleGoHome");
    this.props.deleteCallback();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            
            <Modal
                            header="Are you sure you want to delete the logo? :( "
                            trigger={
                              <li onClick={this.handleDelete} style={ {cursor: "pointer"} }>&#128465;</li>
                            }
                            actions={
                                <div>
                                    <Button className="waves-effect waves-light btn-small"onClick={this.handleDelete} modal ='close' >YES</Button>
                                    <Button className="waves-effect waves-light btn-small" modal='close'>NO</Button>
                                    
                                </div>
                            }
                            
                        >
                            
                        
                        </Modal>

          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;