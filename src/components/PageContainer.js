import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createHighlightPlugin from './plugins/highlightPlugin'

import styles from './PageContainer.module.css';

const highlightPlugin = createHighlightPlugin();

class PageContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.plugins = [
            highlightPlugin,
        ];
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

    onHighlight = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT'))
    }

    render(){
        return(
            <div className={styles.EditorContainer}>
                <button onClick={this.onItalicClick}><em>I</em></button>
                <button onClick={this.onUnderlineClick}>U</button>
                <button onClick={this.onBoldClick}><strong>B</strong></button>
                <button className="highlight" onClick={this.onHighlight}>
                    <span style={{ background: "yellow" }}>H</span>
                </button>
                <Editor 
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={this.plugins}
                />
            </div>
        )
    }
};

export default PageContainer;