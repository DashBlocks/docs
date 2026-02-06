import React, {useState} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import CodeBlock from '@theme/CodeBlock';

export const ExtensionCode = ({title, children}) => {
  const isBrowser = useIsBrowser();
  const origin = isBrowser ? location.origin : `https://dashblocks.github.io/docs`;
  return (
    <div>
      <CodeBlock
        language="js"
        showLineNumbers
        title={(
          <div>
            {`${title}.js`}
            {' - '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                title.startsWith('unsandboxed/') ? (
                  `https://dashblocks.github.io/editor.html?extension=https://dashblocks.github.io/tw-extensions/docs-examples/${title}.js`
                ) : (
                  `https://dashblocks.github.io/editor.html?extension=${origin}/example-extensions/${title}.js`
                )
              }
            >
              {'Try this extension'}
            </a>
          </div>
        )}
      >
        {children.default}
      </CodeBlock>
    </div>
  );
};

export const Spoiler = ({children}) => {
  const [opened, setOpened] = useState(false);
  return (
    <span
      style={{
        transition: '.2s background-color',
        borderRadius: '2px',
        ...(opened ? {
        } : {
          cursor: 'pointer',
          backgroundColor: 'currentcolor'
        })
      }}
      onClick={() => setOpened(true)}
    >
      <span style={opened ? {} : {
        opacity: '0'
      }}>
        {children}
      </span>
    </span>
  );
}
