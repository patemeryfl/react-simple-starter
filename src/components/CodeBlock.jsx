import React from 'react';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/tomorrow-night-eighties.css';

const LANGUAGES = { javascript, json, xml };
Object.keys(LANGUAGES).forEach(key => hljs.registerLanguage(key, LANGUAGES[key]));

export default ({ children, ...props }) => {
  const isHighlight = children.type === 'code';
  if (isHighlight) {
    const text = children.props.children.replace(/(^\s+|\s+$)/g, '');
    const { lang } = props;
    const highlighted = hljs.highlightAuto(text, lang ? [lang] : null);
    return (
      <pre className={`highlight highlight-${lang}`}>
        <code className={`hljs lang-${lang}`} >
          { text }
        </code>
      </pre>
    );
  }
  return <pre {...props}>{ children }</pre>;
};
