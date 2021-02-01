import React, { Component } from 'react';
import './Styles/Skills.scss'
import './Styles/Sidebar.scss'
import Skill from './Skill';

class Sidebar extends Component {
  render() {
    return(
        <div class="sidebar">
          <div class="user">
                <img src={'/peter-avatar.png'} alt={'avatar of peter'}/>
                <h3>Hi I'm Peter</h3>
                <p>I'm a Developer, programed to deliver applications like this.</p>
          </div>

          
          <div class="skills">
            <h2>Skills</h2>
            <div class='skills-cards'>
              <Skill skill='JavaScript' />
              <Skill skill='React' />
              <Skill skill='Ruby on Rails' />
              <Skill skill='Ruby' />
              <Skill skill='Python' />
              <Skill skill='CSS' />
              <Skill skill='HTML' />
              <Skill skill='Git' />
            </div>
          </div>
        </div>
    )        
  }
}
export default Sidebar