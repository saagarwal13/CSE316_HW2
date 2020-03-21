import React, { Component } from 'react';
import { Modal, TextInput, Button,Range } from "react-materialize";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { LogoDefaults } from '../../App';


class TextEditSidebar extends Component {
    
    constructor() {

        super();
         //this.newtext= this.state.text;
         //this.openModal = false;
         


        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: "GoLogoLo",
            textColor: "#FF0000",
            fontSize: 24,
            BackgroundColor: "#FF0000",
            borderColor: "#FF0000",
            borderRadius: 0,
            borderWidth: 0,
            padding: 0,
            margin: 0,
            
        }
        this.newtext= this.state.text;
         this.openModal = false;
         this.handleChange = this.handleChange.bind(this)

    }
    
    

    componentDidMount() {
        this.setState({ textColor: this.props.logo.textColor });
        this.setState({ fontSize: this.props.logo.fontSize });
        this.setState({ BackgroundColor: this.props.logo.backgroundColor });
        this.setState({ borderColor: this.props.logo.borderColor });
        this.setState({ borderRadius: this.props.logo.borderRadius });
        this.setState({ borderWidth: this.props.logo.borderWidth });
        this.setState({ padding: this.props.logo.padding });
        this.setState({ margin: this.props.logo.margin });
        this.setState({text: this.props.logo.text})
    }

    componentDidUpdate(prevProps)
    {
        if(this.props.logo !== prevProps.logo)
        {
            this.setState({
                text: this.props.logo.text,
                textColor: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize ,
                BackgroundColor: this.props.logo.backgroundColor ,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius,
                borderWidth: this.props.logo.borderWidth ,
                padding: this.props.logo.padding,
                margin: this.props.logo.margin,
            });



        }

    }
    handleUndo = () => {
        this.props.undoCallback();
    }
    handleRedo = () => {
        this.props.redoCallback();
    }

    handleEdit = () => {
        if(this.state.text.trim()== "")
        { 
            alert("blank value entered");
            this.openModal = true;

        }
        else{
        this.openModal = false;
         this.completeUserEditing();
        }
      
    }
    handleChange = (event) => {
        this.openModal= true;

  console.log(this.state.value)
  //console.log(this.newtext);
      this.setState({text: event.target.value})
      
      
      

    
          
    }
    handleClose = ()=>
    {
        
        this.newtext = this.state.text;
        
        //this.newtext 
        
    }
    
    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ BackgroundColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }
    handleBorderWidthChange = (event) => {
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }
    handlePadding = (event) => {
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }
    //handleMargin = (event) => {
    //console.log("handleBorderRadius to " + event.target.value);
    //this.setState({ margin: event.target.value }, this.completeUserEditing);
    //}



    completeUserEditing = () => {
        
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, this.state.BackgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderWidth, this.state.padding, this.state.margin);
    }

    render() {
        let redoClass = "waves-effect waves-light btn-small";
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        if (redoDisabled)
            redoClass += " disabled";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Modal style={{backgroundColor: "LightCyan", fontSize: 30}}
                        open={this.openModal}
                            header="Change Logo Name"
                            trigger={
                                <Button className="waves-effect waves-light btn-small" >&#9998;</Button>
                            }
                            actions={
                                <div style={{textAlign: "center", padding: 0.5,backgroundColor: "Lavender"} }>
                                    <Button className="waves-effect waves-light btn"modal ='close' onClick={()=>this.setState({text:this.props.logo.text})}  >CLOSE </Button>
                                    <Button className="waves-effect waves-light btn"onClick={this.handleEdit }>ENTER</Button>
                                    
                                </div>
                            }
                            
                        >
                            <TextInput value = {this.state.text} onChange={this.handleChange} />
                            
                            <div id="string"> {this.textstring} </div>
                        
                        </Modal>



                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card-panel indigo lighten-3">
                    <div className="card-content black-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleTextColorChange}
                                    value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Radius:</div>

                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Width:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleBorderWidthChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handlePadding}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleMargin}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default TextEditSidebar