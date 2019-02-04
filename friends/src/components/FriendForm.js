import React from 'react';
import './FriendForm.css'

function FriendForm(props) {

    return (
        <div className='form-wrapper'>
            <form className='friend-form' onSubmit={props.addFriend}>
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={props.name}
                        onChange={props.handleChanges}
                    />
                </div>

                <div>
                    <input
                        type='number'
                        name='age'
                        placeholder='Enter Age'
                        value={props.age}
                        onChange={props.handleChanges}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        value={props.email}
                        onChange={props.handleChanges}
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default FriendForm;