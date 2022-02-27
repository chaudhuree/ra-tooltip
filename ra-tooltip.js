<div id="app"></div>

function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
 ReactDOM.render(
     <Tooltip text='chaudhuree'>
       <button>Hover me!</button>
     </Tooltip>,
     document.getElementById('app')
 );
