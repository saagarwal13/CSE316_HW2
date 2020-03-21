// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'


export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false,
            
        }
    }
    

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
        document.onkeydown = this.handlekey
       
    }

    
        handlekey =(e)=>
        {
            if(e.ctrlKey && e.keyCode == 90)
            {
                e.preventDefault();
                this.props.undoCallback();
                

            }
            else if(e.ctrlKey && e.keyCode ==89)
            {
                e.preventDefault();
                this.props.redoCallback();


            }
        }
    

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">

                <Navbar goToHomeCallback={this.props.goToHomeCallback}
                deleteCallback={this.props.deleteCallback} />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        
                        undoCallback={this.props.undoCallback}
                        redoCallback={this.props.redoCallback}  
                        editCallback={this.props.editCallback}                                          
                        canUndo={this.props.canUndo}  
                        canRedo={this.props.canRedo}                       
                    />
                    <div style={{ overflow: "scroll" }}>
                    
                    <TextEditWorkspace
                        logo={this.props.logo} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EditScreen