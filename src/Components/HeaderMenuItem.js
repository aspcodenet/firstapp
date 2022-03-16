import React from 'react'

export const HeaderMenuItem = (props) => {

  const IWasClicked = () =>{
      alert('Nu klickades jag ' + props.menuText);
  }  

  return (
    <li>
        <a 
            onClick={IWasClicked}
            className={ `headeranchor ${props.activePage == props.menuText ? ' active': ''}`     }
            href="#">{props.menuText}
        </a>
    </li>
    )
}
