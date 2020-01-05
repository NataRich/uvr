import { UserClassType } from '../../../global/user/class';
import { ILogoAttributes } from '../../../components/UVRLogo/interface';
import {
    IRoundedButtonProps,
    IRoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export type NavProps = {
    user:           UserClassType | null;
    isFetchingUser: boolean;
};

export type LocalRbuttonAttributes = {
    style: IRoundedButtonStyle;
    props: IRoundedButtonProps;
};

const defaultLogoAttributes: ILogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};

const defaultButtonAttributes: LocalRbuttonAttributes = {
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