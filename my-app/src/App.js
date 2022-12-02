import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myheder from './Myheder';


class App extends Component {

    
    state = {
        name: 'Sobeit',
        counter: 0,
        isShow: true,
        studts:[
            {
            name:"Ali",
            age: 20 ,
            group: 35        
            },
            {
                name:"vali",
                age: 20 ,
                group: 35        
                },
                {
                    name:"sadir",
                    age: 20 ,
                    group: 35        
                    },
        ]
    };

    changeName = () => {
        this.setState({
            name: 'Shojis'
        })
    };

    addCount = () => {
        if (this.state.counter < 10) {
            this.setState({
                counter: this.state.counter + 1
            })
        }

    };
    removeCount = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }

    };

    deletestudts = (deleteIndex) => {
      this.state.studts.splice(deleteIndex, 1);
      this.setState({
        studts:this.state.studts
      })
    };

    Show=()=>{
        this.setState({
            isShow:true
        })
    };
    Hide=()=>{
        this.setState({
            isShow:false
        })
    };



    render() {
        const {name, counter, isShow,studts} = this.state;


        return (
            <div>

                <div className="container mt-2" >
            <div className="row">
                <div className="col-md-12">
                <table class="table table-bordered table-dark">
    <thead class="thead-dark">
      <tr>
        <th>Tr</th>
        <th>Name</th>
        <th>Age</th>
        <th>Group</th>
        <th>Actsion</th>
      </tr>
    </thead>
    <tbody>
    {studts.map((item,index)=>(
      <tr key={index}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
         <td>{item.group}</td>
         <td><button className="btn btn-danger" onClick={()=>this. deletestudts(index)} >Delet</button></td>
      </tr>

    ))}
      
    </tbody>
  </table>
  
                </div>
            </div>
            </div>





                <h1>{name}</h1>
                <button className="btn btn-success" onClick={this.changeName}>Change name</button>


                <br/>
                <button className="btn btn-primary" onClick={this.Show}>show</button>
                <h1>{isShow ?
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-dark text-center text-white">
                                        <h1>{counter}</h1>
                                    </div>
                                    <div className="card-body d-flex justify-content-around">
                                        <button className="btn btn-danger" onClick={this.removeCount}>-</button>
                                        <button className="btn btn-success" onClick={this.addCount}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    ''}
                </h1>
                <button className="btn btn-danger" onClick={this.Hide}>hide</button>


                        

                 <Myheder/>          


            </div>

        );
    }
}

export default App;