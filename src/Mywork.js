import React,{Component} from 'react';
import './style.css';
import Axios from 'axios';
import Proj from './Proj';

class Mywork extends Component{
    state={
        cat:'all',
        active:false,
        VidList:[],
        Vid:'',
        Title:'',
        Language:'',
        Category:'',
    }
    //아래 주소로부터 update된 vidlist를 가져옴
    getVidList=async()=>{
        Axios.get('http://localhost:3001/api/get')
        .then((response)=>{
            this.setState({VidList:response.data});
        })
    }
    componentDidMount(){
        this.getVidList();
    }

    //추가버튼 클릭이벤트
    //아래 주소로 정보 보냄
    submitProject =() =>{
        Axios.post('http://localhost:3001/api/insert', 
        {vid: this.state.Vid, title:this.state.Title, language:this.state.Language, category:this.state.Category});
        //update newly added list 구현해야돼 이거 에러나
        //this.setState({VidList:{vid:this.state.Vid, title:this.state.Title, language:this.state.Language, category:this.state.Category}});
    }

    render(){
        return(
            <div className="mywork" id="mywork">
                <div className="title">My work</div>
                <div className = "subtitle"> Projects</div>
                <div className="btns">
                    <button onClick={()=>{this.setState({cat:'all'});}}>All</button>
                    <button onClick={()=>{this.setState({cat:'front'});}}>Front-end</button>
                    <button onClick={()=>{this.setState({cat:'back'});}}>Back-end</button>
                    <button onClick={()=>{this.setState({cat:'game'});}}>Game</button>
                    <button onClick={()=>{this.setState({cat:'etc'});}}>ETC</button>
                    <img src="image/add.png" className="addBtn" onClick={()=>this.setState({active:!this.state.active})}/>
                </div>
                <span className={this.state.active ? 'add active' : 'add'}>
                    <div className="input">
                        <div><input type="text" placeholder=" VIDEO ID" onChange={(e)=>{this.setState({Vid:e.target.value})}}/></div>
                        <div><input type="text" placeholder=" TITLE" onChange={(e)=>{this.setState({Title:e.target.value})}}/></div>
                        <div><input type="text" placeholder=" LANGUAGE" onChange={(e)=>{this.setState({Language:e.target.value})}}/></div>
                        <div><input type="text" placeholder=" CATEGORY ex) front, back, game" onChange={(e)=>{this.setState({Category:e.target.value})}}/></div>
                    </div>
                    <button className="okbtn" onClick={()=>{this.submitProject(); this.setState({active:false})}}>확인</button>
                </span>
                <span className="displays">
                    {this.state.VidList.map(val=>(
                        (val.category===this.state.cat || this.state.cat==='all' ? 
                        <Proj vid={val.vid} title={val.title} language={val.language} category={val.category}/> : null)
                        ))} 
                </span>
            </div>
        )
    }
}

export default Mywork;