const Style = {
    Todo:{
        display: "flex",
        flexDirection: "row",
        margin: "4px",
        
    },
    TodoButton:{
        borderRadius: '50%',
        width:'40px',
        height:'40px',
        display: 'block',
        marginRight: '16px',
        border:'2px solid #1C427E',
        color: 'white',
        fontSize:'28px',
        paddingTop:'2px'
    },
    TodoText:{
        paddingTop: '8px',
        fontSize: '22px',
        fontWeight:'100',
        color:'#1C427E',
        width: 'calc(100% - 80px)',
    },
    TodoEditButton:{
        fontSize:'24px',
        backgroundColor:'transparent',
        border:'none'
    }
}
export default Style;