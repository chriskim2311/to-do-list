import React, {Component} from 'react';
import listData from '../dummy_data/list';

class List extends Component{
    constructor(props) {
        super(props);
        this.state={
            list: []
        }
    }

    componentDidMount() {
        this.getListData();
    }

    getListData(){
        this.setState({
            list: listData
        })
    }




    render(){
        console.log('State:', this.state)

        const listElements = this.state.list.map((item,index)=>{
            return <li className='collection-item' key= {item._id}>{item.title}</li>;
        })
        return(
            <ul className='collection'>
                {listElements}
            </ul>
        )
    }
}



export default List;