import React from 'react';
import NavigationBar from './NavigationBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={val:'helloox'}
  }

  handleClick (){
    console.log('jnj');
    this.setState({val:'hhhhhhh'})
  }
  render() {
    return (
      // <div style={{display:'flex',justifyContent:'center',height:'100vh',width:'100vw'}}>
      //   <div style={{display:'flex',justifyContent:'space-between',height:'10%',width:'90%',marginHorizontal:'5%',
      //     backgroundColor:'silver',borderWidth:1,marginTop:-10,borderColor:'black'}}>
      //     <div style={{marginLeft:'3%'}}>
      //       <h4 onClick={this.handleClick.bind(this)}>Red Dice</h4>
      //     </div>
      //     <div style={{marginRight:'3%'}}>
      //       <h4>SignUp</h4>
      //     </div>
      //   </div>
      // </div>
      //
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }

}
export default App
