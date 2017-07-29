import React, { Component } from 'react';
import './App.css';

let databases = [];

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         count: 1,
         data: "23",
         database: [],
         input: 0
      };

      this.addClick = this.addClick.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this.getResult = this.getResult.bind(this);
   }

   addClick() {
      if(this.state.input === "") {
         return;
      }

      if(Number(this.state.input) === 'undefined') {
         alert("请输入数字");

         return;
      }

      databases.push(Number(this.state.input));

      this.setState({
         database: databases
      });
   }

   onBlur(e) {
      this.setState({
         input: e.target.value
      });
   }

   getResult() {
      let list = this.state.database;
      let sum = 0;
      let sum1 = 0;

      for(let i = 0; i < list.length; i++) {
         sum += list[i];
      };

      for(let i = 0; i < list.length; i++) {
         if(sum1 === (sum - list[i]) / 2) {
            alert('第' + (i + 1) + '个数字为' + list[i] + '，是该数组中的平衡位');
         }

         sum1 += list[i];
      }
   }

   render() {
      return (
         <div className = "app">
            <div id='database'>
               {
                  this.state.database.length === 0 ? "" : JSON.stringify(this.state.database)
               }
            </div>
            <input id = 'input' placeholder = "请输入数字" onBlur={this.onBlur} />
            <div id='add' className='button'
               onClick={this.addClick}
            >添加数据</div>
            <div id='compute' className='button' onClick={this.getResult}>获得平衡位</div>
         </div>
      );
   }

}

export default App;
