import React from 'react'
  
const ProgressBar = ({progress,height}) => {
     
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
        backgroundColor: "#808080",
        textAlign: 'right',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
      
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
      {/* <h4></h4> */}
      {`${progress}%`}
    </div>
    )
}
  
export default ProgressBar;