import React from 'react'
  
const ProgressBar = ({progress, bgcolor}) => {
     
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
        zIndex: "10"
      }
      const Prog_per = {
        zIndex: "100",
        with: "100%",
        textAlign: "right",
      }
      
      // const progresstext = {
      //   padding: 10,
      //   color: 'black',
      //   fontWeight: 900
      // }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}></span> */}
      </div>
      <div style={Prog_per}>
      {`${progress}%`}
      </div>
    </div>
    )
}
  
export default ProgressBar;