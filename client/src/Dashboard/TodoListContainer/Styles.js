const Styles = {
    TodoListContainer:{
        padding:'30px',
        width: 'calc(100% - 60px)'
    },
    AddTodoList:{
        position:'fixed',
        padding: '18px',
        paddingTop:'9px',
        borderRadius: '50%',
        width:'60px',
        height:'60px',
        top:'calc(95% - 60px)',
        left:'calc(95% - 60px)',
        border:'none',
        color: 'white',
        fontSize:'40px',
        backgroundColor:'#1C427E'
    },
    AddTodoListDiv:{
        position: 'fixed',
        top:'calc(50% - 10px)',
        left: 'calc(50% - 212px)',
        width: '200px',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        padding: '12px',
        paddingLeft: '24px',
        paddingRight: '24px',
        border: '2px solid #6D7C92',
        width:'400px'
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
        marginLeft: '16px',
        backgroundColor:'#1C427E',
        border:'none',
        color: 'white',
        fontSize:'28px',
        paddingTop:'2px'
    },
    blue:{
        position: 'fixed',
        top: '0%',

        height: '100vh',
        width: '100vw',
        backgroundColor:'rgba(28,66,126,0.6)'
    }
}
export default Styles;