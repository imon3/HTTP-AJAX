import React from 'react';
import './FriendForm.css'

class FriendForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className='form-wrapper'>
                <form className='friend-form'>
                    <div>
                        <label htmlFor='name'>Enter Name: </label>
                        <input
                            id='name'
                            type='text'
                            name='name'
                            value={this.props.newFriend.name}
                            onChange={this.props.handleChanges}
                        />
                    </div>

                    <div>
                        <label htmlFor='age'>Enter Age: </label>
                        <input
                            id='age'
                            type='number'
                            name='age'
                            value={this.props.newFriend.age}
                            onChange={this.props.handleChanges}
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Enter Email: </label>
                        <input
                            id='email'
                            type='text'
                            name='email'
                            value={this.props.newFriend.email}
                            onChange={this.props.handleChanges}
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>

        )
    }
}

export default FriendForm;