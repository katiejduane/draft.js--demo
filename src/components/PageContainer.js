import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';


class PageContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if(newState){
            this.onChange(newState);
            return 'handled';
        }else{
            return 'not handled';
        }
    }

    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }

    render(){
        return(
            <div>
                <button onClick={this.onItalicClick}><em>I</em></button>
                <button onClick={this.onUnderlineClick}>U</button>
                <button onClick={this.onBoldClick}><strong>B</strong></button>
                <Editor 
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </div>
        )
    }
};

export default PageContainer;