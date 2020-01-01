import { UserClassType } from '../../../global/user/class';
import { LogoAttributes } from '../../../components/UVRLogo/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export type NavProps = {
    user:           UserClassType | null;
    isFetchingUser: boolean;
};

const defaultLogoAttributes: LogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};

const defaultButtonAttributes: {props: RoundedButtonProps, style: RoundedButtonStyle} = {
    style: {
        width: 100,
        height: 40,
        borderColor: '#FFF',
        fontColor: '#FFF',
        fontSize: 16,
        backgroundColor: '#149E9A',
        invertColorH: true,
        borderWidth: 2,
        borderRadius: 5,
        loadingBorderColor: '',
    },
    props: {
        defaultValue: 'Log In',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultLogoAttributes,
    defaultButtonAttributes,
};