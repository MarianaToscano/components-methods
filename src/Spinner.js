import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = { 
//para meter uma msg pre definida, mas neste caso vai aparecer o q definimos no index qd aparece a pag inicial
  message: 'Loading...'
};

export default Spinner;
