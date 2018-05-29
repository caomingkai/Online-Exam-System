import React from 'react';
import { Component } from 'react'
import { Link , withRouter} from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
import { connect } from 'react-redux'


const IndicatorView = ({id, index, type, answer})=> {
    const flag = answer==="" ? "unsolved" : "finished"
    const targetEle = '#question' +type+ '-' +id
    return(
        <div>
            <ScrollIntoView selector={targetEle}>
                {"problem" + index} : {flag}
            </ScrollIntoView>
        </div>
    )
}


const SectionView =({questionArr, index, handlerSectionClick, show})=>{
    const flag = show ? "block" : "none"
    const displayStyle = { display: flag }
    const lists = questionArr.map(
        (item, index)=>(<IndicatorView key={item.id}
                             id={item.id}
                             index = {index+1}
                             type={item.type}
                             answer={item.answer} />)
    )

    return (<div>
                <Link to={'/exam/'+index} onClick={()=>handlerSectionClick(index-1)}> {"Section" + index} </Link>
                <div style={displayStyle}>
                    {lists}
                </div>
            </div>)
}

const SectionList = ({questionSet, sectionTotal, handlerSectionClick, showArr})=>{
    const range = [...Array(sectionTotal).keys()]
    const lists = range.map((item)=>{
        const index = item+1
        const questionArr = questionSet['section'+index]
        return <SectionView key={item}
                            questionArr={questionArr}
                            index={index}
                            handlerSectionClick={handlerSectionClick}
                            show={showArr[item]}
                />
    })

    return <div> {lists} </div>
}


class SideNav extends Component{
    constructor(){
        super()
        this.state={
            showArr: []
        }
        this.sectionTotal=0
    }

    componentDidMount(){
        this.sectionTotal = Object.keys(this.props.questionSet).length
        let sectionsOpen = new Array(this.sectionTotal).fill(false);
        this.setState({
            showArr: sectionsOpen
        });
    }

    componentWillUnmount(){
        this.setState({
            showArr: []
        })
    }

    handlerSectionClick=(index)=>{
        const oldValue = this.state.showArr
        const newValue = new Array(this.sectionTotal).fill(false);
        newValue[index] = true;
        this.setState({
            showArr: newValue
        });
    }

    render(){
        return <div>
                    <h4> Navigation </h4>
                    <SectionList questionSet={this.props.questionSet}
                                 sectionTotal={this.sectionTotal}
                                 handlerSectionClick={this.handlerSectionClick}
                                 showArr = {this.state.showArr} />
               </div>
    }
}

const mapStateToProps=(state)=>{
    console.log(state.examData.data);
    return {questionSet: state.examData.data}
}

const SideNavContainer = withRouter(connect(mapStateToProps)(SideNav))
export default SideNavContainer
