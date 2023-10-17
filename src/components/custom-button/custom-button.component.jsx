import './custom-button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};


const CustomButton = ( {children, buttonType, ...otherProps}) => {
    return (
        <button className={`${buttonType? buttonType : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;