import React from 'react';
import './FriendForm.css'

class FriendForm extends React.Component {

    render() {
        return (
            <div className='form-wrapper'>
                <form className='friend-form'>
                    <div>
                        <label htmlFor='name'>Enter Name: </label>
                        <input id='name' type='text' name='name' />
                    </div>

                    <div>
                        <label htmlFor='age'>Enter Age: </label>
                        <input id='age' type='number' name='age' />
                    </div>

                    <div>
                        <label htmlFor='email'>Enter Email: </label>
                        <input id='email' type='text' name='email' />
                    </div>

                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default FriendForm;