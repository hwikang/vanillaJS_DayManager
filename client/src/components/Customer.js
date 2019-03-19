import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

//라이브러리
class Customer extends React.Component{
    //항상 수행, customer를 실제로 그리는내용을담음
    render(){
        return(                        
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>  
                <TableCell>{this.props.birthday}</TableCell>  
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>                    
            </TableRow>            
        )
        
    }
}
export default Customer;
