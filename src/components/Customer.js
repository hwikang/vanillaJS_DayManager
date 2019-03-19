import React from 'react';

//라이브러리
class Customer extends React.Component{
    //항상 수행, customer를 실제로 그리는내용을담음
    render(){
        return(
            <div>
                
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>   
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
        
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                {/* 이걸 부른놈의 id,name,,, */}
                <h2>{this.props.name}({this.props.id})</h2>
                <img src={this.props.image} alt="profile"/>

            </div>
        )
    }     
    
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
