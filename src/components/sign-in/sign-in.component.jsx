import { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
    // using state because we have to change the email, password frequently
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    function resetFormField() {
        setFormFields(defaultFormFields);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormField();
        } catch (error) {
            console.log('user sign in failed', error)
        }
    }

    async function handleChange(event){
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value});
    }

    async function signInWithGoogle () {
        await signInWithGooglePopup();
    };
    
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                type='email' 
                name='email' 
                value={email} 
                label={'email'}
                handleChange={handleChange}
                required
                />

                <FormInput 
                type='password' 
                name='password' 
                value={password}
                label={'password'}
                handleChange={handleChange} 
                required
                />

                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGooglePopup} isGoogleSignIn={true}> Google SignIn </CustomButton>
                </div>
            </form>
        </div>
    )
}
export default SignIn;