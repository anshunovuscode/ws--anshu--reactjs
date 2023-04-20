import React from 'react';
import './ProgressBar.css';
import lightning from '../../Assets/lightning.png';

const ProgressBar = ({ progress, bgcolor }) => {

  const Parentdiv = {
    height: 30,
    width: '100%',
    backgroundColor: '#E5E4E2',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: "5px",
  }
  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: 'right',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <div className='light_data'>
          <img src={lightning} alt="" width={15} height={15} />
          {(progress / 100) * 5000}
        </div>
      </div>
      <div style={{height:"100%",borderBottomRightRadius:'5px',borderTopRightRadius:'5px', backgroundColor: progress === 100 ? bgcolor : " "}}>
          {`${progress}%`}
      </div>
    </div>
  )
}

export default ProgressBar;