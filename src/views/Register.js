import React, { Component } from 'react';

export default class Register extends Component {
    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e);

       
      
    }
  render() {
    return (
        <form onSubmit={(e)=> this.props.register(e)}>
        <h3 className='text-center'>Register Here</h3>
        <div className='form-group'>
        
            <fieldset>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='form-control' placeholder='Email' />
            </fieldset>
            <fieldset>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='form-control' placeholder='Password' />
            </fieldset>
            <fieldset>
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
            </fieldset>
            <input type='submit' className='btn btn-outline-primary  mt-3' value='Register' />
        </div>
    </form>
      
    );
}
}