import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import OneQuestion from './OneQuestion'

const Questions= ({questionArr, targetType})=>{
    console.log(targetType);
    console.log(questionArr);
    const listItems = questionArr.map((item)=>
        <OneQuestion    key={item.id + 10*item.type}
                        id={item.id}
                        type={item.type}
                        question = {item.question}
        />
    );

    return(
        <div >
            <div>
                {listItems}
            </div>
        </div>
    )
}



// export default QuestionsContainer
export default Questions
