import React, {useState} from "react";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ?
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/> :
                <h3 onClick={activateEditMode}>{(props.status === null) || (props.status === '') ? 'Статус отсутствует' : props.status}</h3>}

        </div>
    )

}

export default ProfileStatusWithHook