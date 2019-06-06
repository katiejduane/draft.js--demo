import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';


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
        });
    }

    render(){
        return(
            <div>
                <Editor 
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    />
            </div>
        )
    }
};

export default PageContainer;