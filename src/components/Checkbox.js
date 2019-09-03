import React from 'react'
import {firebase} from '../firebase'

export const Checkbox = ({id}) => {
    const archiveTask = ()=>{
        firebase
        .firestore()
        .collection('tasks')
        .docId(id)
        .update({
            archived : true,
        })
    }


    return (
        <div className = "checkbox-holder" data-testid="checkbox-action" onClick={()=>archiveTask()}>
            <span className="checkbox"></span>
        </div>
    )
}