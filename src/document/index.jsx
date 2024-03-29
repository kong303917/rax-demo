import { createElement } from 'rax';

function Document(props) {
  const {
    publicPath,
    initialHtml,
    initialData,
    styles,
    scripts,
  } = props;

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"/>
        <title>rax-demo-1</title>
        {styles.map((src, index) => <link rel="stylesheet" href={`${publicPath}${src}`} key={`style_${index}`} />)}
      </head>
      <body>
        {/* root container */}
        <div id="root" dangerouslySetInnerHTML={{ __html: initialHtml || '' }} />
        {/* initial data from server side */}
        <script data-from="server" dangerouslySetInnerHTML={{__html: 'window.__INITIAL_DATA__=' + initialData}} />
        {
          scripts.map(
            (src, index) => <script src={`${publicPath}${src}`} key={`script_${index}`}>
              {/* self-closing script element will not work in HTML */}
            </script>
          )
        }
      </body>
    </html>
  );
}

export default Document;
