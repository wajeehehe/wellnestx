import React from 'react';
import Markdown from 'react-markdown';

// Custom renderer for single asterisks
const breakRenderer = ({ children }) => <br key={children} />;

const AIMarkdown = ({ markdownText }) => {
    return (
        <Markdown renderers={{ '*': breakRenderer }} >{markdownText}</Markdown>
    );
};

export default AIMarkdown;