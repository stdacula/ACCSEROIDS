import React from 'react';

class PlayerIGN extends React.Component{
    render()
    {
      return (
       <div className = "startgame">
            <label>Player Name: </label>
              <input type="text" value={this.state.playername} 
                onChange={(e) => this.set.State({playername:e.target.value})}/>
                  <button 
                      onChange={this.postDataHandler}>
                        Start
                  </button>
          </div>

      );
    }
  }

export default PlayerIGN;