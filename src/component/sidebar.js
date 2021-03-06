import React, { useContext, useEffect } from 'react';
import '../component/styles/Sidebar.css';
import Traceability from './Traceability.js'
import Statistics from './statistics.js'
import logo from '../images/LogoAccen.svg'
import { ShowContext } from '../App'
import logoO from '../images/overview.svg'
import logoT from '../images/tickets.svg'
import logoP from '../images/persona.svg'
import logoS from '../images/settings.svg'
import logoL from '../images/logout.svg'
import { animateScroll as scroll } from 'react-scroll';


function Sidebar() {

  const scrollForm = window.screen.width < 1024 ? 390 : 780;

  // me traigo valores del contexto
  const { formToShow, positionScrollForm } = useContext(ShowContext);

  // le doy un valor a los estados de cada objeto
  const [formToShowValue, setFormToShowValue] = formToShow;
  const [positionScrollFormValue, setPositionScrollFormValue] = positionScrollForm;

  useEffect(() => {
    scroll.scrollTo(positionScrollFormValue)
  }
  )

  const classButtonArchiveOVER = formToShowValue === 'Overview' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveTick = formToShowValue === 'Tickets' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveTEAMS = formToShowValue === 'Teams' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveSETT = formToShowValue === 'Settings' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveLOG = formToShowValue === 'Logout' ? 'archiveBtnOn' : 'archiveBtnOff';

  let form = '';

  if (formToShowValue === 'Overview') form = <Statistics/>
  if (formToShowValue === 'Tickets') form = <Traceability />
  if (formToShowValue === 'Teams') form = <Statistics/>
  if (formToShowValue === 'Settings') form = <Traceability />
  if (formToShowValue === 'Logout') form = <Statistics/>

  return (
    <div className='containerSidebar'>
      <div className='containerLogoAaccen'>
       <img src={logo} className='logoAccen'/> 
    </div>
    <div className='containerLogos'>
    <img src={logoO} className='logossider'/> 
        <button  className={classButtonArchiveOVER}
          onClick={() => {
            setFormToShowValue('Overview');
            setPositionScrollFormValue(scrollForm);
          }}>
          Overview
          </button>
          </div>

          <div className='containerLogos'>
          <img src={logoT} className='logossider'/> 
         <button className={classButtonArchiveTick}
          onClick={() => {
            setFormToShowValue('Tickets');
            setPositionScrollFormValue(scrollForm)
          }}>
          Tickets</button>
          </div>

          <div className='containerLogos'>
          <img src={logoP} className='logossider'/>
        <button className={classButtonArchiveTEAMS} onClick={() => {
          setFormToShowValue('Teams');
          setPositionScrollFormValue(scrollForm)
        }}>
        Teams</button>
        </div>

        <div className='containerLogos'>
        <img src={logoS} className='logossider'/> 
        <button className={classButtonArchiveSETT} onClick={() => {
          setFormToShowValue('Settings');
          setPositionScrollFormValue(scrollForm);
        }}>
        Settings</button>
        </div>

        <div className='containerLogos'>
        <img src={logoL} className='logossider'/> 
        <button className={classButtonArchiveLOG} onClick={() => {
          setFormToShowValue('Logout');
          setPositionScrollFormValue(scrollForm);
        }}>
        Logout</button> 
         </div>
      
      {form}
    </div>
  );
}

export default Sidebar;