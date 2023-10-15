import './custom-button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

const CustomButton = ( {children, buttonType, ...otherProps}) => {
    return (
        <button className={`${buttonType? buttonType : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;