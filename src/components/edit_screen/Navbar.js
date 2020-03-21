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
                style={ {cursor: "pointer", textAlign: "center"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            
            <Modal style={{backgroundColor: "LightCyan", fontSize: 30}}
                            header="Are you sure you want to delete the logo? 🧐 "
                            trigger={
                              <li onClick={this.handleDelete} style={ {cursor: "pointer",fontSize: 30} }>&#128465;</li>
                            }
                            actions={
                                <div style={{textAlign: "center", padding: 0.5,backgroundColor: "Lavender"} }>
                                 
                                    <Button className="waves-effect waves-light btn"onClick={this.handleDelete} modal ='close' >YES ✅</Button>
                                    <Button className="waves-effect waves-light btn" modal='close'>NO ❎</Button>
                                    
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