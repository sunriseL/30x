import React, { Component } from 'react';
import logo from './logo.svg';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';
import './App.css';
import 'antd/lib/carousel/style/index.css';
import 'antd/lib/carousel/style/css.js';
import 'antd/lib/carousel/style/index.js';
import playButton from './icon/30x/play-button-2.svg';
import pauseButton from './icon/30x/pause-2.svg';
import up from './icon/30x/heart-3.svg';
import upFilled from './icon/30x/heart-4.svg';
import share from './icon/30x/share.svg';
import click from './icon/30x/click.svg';
import { Carousel } from 'antd';
let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              [], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           true, // use dots navigatio
  scrollBar:            true, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};




class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isPlay:false,
      isUpped:false,
      visible:false,
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  cancelModal = () => {
    this.setState({
      visible: false,
    });
  }

  ControlAudio = () => {
    const audio = document.getElementById(`1`);
    const flag = this.state.isPlay;
    if(flag){
      audio.pause();
      this.setState({
        isPlay:false,
      })
    } else{
      audio.play();
      this.setState({
        isPlay:true
      })
    }
  }
  up = () => {
    this.setState({
      isUpped:true
    })
  }

  render() {
    let float = this.state.visible ?   <div className="float" onClick={this.cancelModal}>
        <img className="icon" src={click} style={{float:'right',margin:15,transform:'rotate(65deg)'}} ></img>
        <span style={{float:'right',margin:15, paddingTop:50, color:'white'}}>点击转发到朋友圈</span>
      </div> : null;
    return (
      <div className="App">

      <ScrollToTopOnMount/>
        <SectionsContainer {...options}>
          <Section>



        <header className="App-header">
          <Carousel afterChange={onChange}  className="card">
  <div><img className="picture-in-card"src={require('./1.jpg')} ></img></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
</Carousel>
            <div className="box">
          <div className="header-header">
            <div id="logo"><img className="icon" src={require('./icon/30x/popup.png')}></img></div>
          </div>
          <div id="header-id">#123</div>
          <div id="header-name">李嘉昊</div>
          </div>
        </header>
        <div className="App-footer">
        <audio src={require('./1.mp3')} id={1} >
您的浏览器不支持 audio 标签。
</audio>
          <div className="background">
            <div id="footer-tool">
              <div onClick={this.ControlAudio} id="play-button"><img className="icon" src={!this.state.isPlay?playButton:pauseButton}></img></div>
              <div id="up-button" onClick={this.up}><img className="icon" src={this.state.isUpped?upFilled:up}></img></div>
              <div id="link-button" onClick={this.showModal}><img className="icon" src={share}></img></div>
            </div>

            <div id="footer-text">
              经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标经验值不达标
            </div>
            <div id="footer-button">
              去现场加油按钮
            </div>
            <div id="footer-footer">
              没有更多了 去看复赛吧
            </div>
          </div>
        </div>
            {float}
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
