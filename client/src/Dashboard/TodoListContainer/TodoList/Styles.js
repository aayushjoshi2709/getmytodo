const Styles = {
    TodoList:{
        fontFamily:'Sans-Serif',
        margin: '8px',
        padding: '12px',
        border: '2px solid #6D7C92',
        float: 'left',
        width: '300px',
        boxShadow: "2px 2px 2px grey 2px 2px 2px blue 2px 2px 2px orange"
    },
    AddTodo:{
        padding:'2px',
        display:'flex',
        flexDirection:'row',
        width: '100%'
    },
    AddTodoText:{
        width: 'calc(100% - 64px)',
        outline: 'none',
        fontSize:'18px',
        border: 'none'
    },
    AddTodoButton:{
        borderRadius: '50%',
        width:'40px',
        height:'40px',
        display: 'block',
        marginRight: '16px',
        backgroundColor:'#1C427E',
        border:'none',
        color: 'white',
        fontSize:'28px',
        paddingTop:'2px'
    },
    Heading:{
        paddingTop: '0px',
        marginTop:'0px',
        color: '#889DB6'
    }
}

export default Styles;