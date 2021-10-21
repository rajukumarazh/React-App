import React from "react";
class Todo extends React.Component{
    constructor(props){
        super(props);
    this.state={
        items:[],
        text:""
    }
    }
    handleChange=(e)=>{
       // e.preventDefault();
        this.setState({text:e.target.value});
        //console.log(this.state.text)
    }
    handleAdd=(e)=>{
        if(this.state.text!== ""){
            const item=[...this.state.items,this.state.text];
            this.setState({items:item,text: ""});
            console.log(this.state.items);
        }
    }
    handleDeleted=(i)=>{
        console.log("deleted", i);
        const oldItems=[...this.state.items]
        console.log(" available Items",oldItems);
        const items =oldItems.filter((element,key)=>{
            return i!==key;
           
        })
        this.setState({items:items});
    }
    render(){
        return(
            <>
             <p>Hello {this.state.text}</p>
             <input type="text"onChange={this.handleChange}></input>
             <button onClick={this.handleAdd}>Add ToDo</button>
             {
                 this.state.items&&this.state.items.map((todo,i)=>{
                     return(
                         <>
                        
                         <h1 key={i} id ={i}>
                            {todo} <button onClick={()=>{this.handleDeleted(i)}}>Remove ToDo</button>
                        
                         </h1>
                         </>
                     ) 
                 })
                    
                
             }
            </>
        );
     
    }
}export default Todo;