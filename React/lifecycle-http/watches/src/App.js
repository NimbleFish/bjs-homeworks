import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'date': 0,
      'clocks': []
    }
  }
  
  changeValue = frm => this.setState({[frm.target.id]: frm.target.id === 'date' ? parseInt(frm.target.value) : frm.target.value});
  
  addClock() {
    console.log(this.state);
    // this.state.clocks.push({
    //   'name': this.form.name,
    //   'timeZone': this.form.date,
    //   'time': `${new Date().getUTCHours()+this.form.date}:${new Date().getUTCMinutes()}`
    // });
  }

  componentDidMount() {
    setInterval(() => this.state.clocks.forEach(el => el.time = `${new Date().getUTCHours()+el.timeZone}:${new Date().getUTCMinutes()}`), 1000);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="controls-wrapper">
          <div className="block-wrapper">
            <label htmlFor="name">Название</label>
            <input id="name" type="text" value={this.state.form.name} onChange={this.changeValue} />
          </div>
          <div className="block-wrapper">
            <label htmlFor="date">Временная зона</label>
            <input id="date" type="number" value={this.state.form.date} onChange={this.changeValue} />
          </div>
          <div onClick={this.addClock}>Добавить</div>
        </div>
        <ul>
          {
            this.state.clocks.length !== 0 && this.state.clocks.map(el => {
              <li>
                {el.time}
              </li>
            })
          }
        </ul>
      </div>    
    );
  }
}