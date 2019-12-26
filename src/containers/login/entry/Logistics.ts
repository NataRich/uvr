import { LocalButtonAttributes } from './interface';
import { LogoAttributes } from '../../../components/UVRLogo/interface';

const defaultLogoAttributes: LogoAttributes = {
    style: {
        position: 'RHS',
    },
    props: {

    },
};

const defaultButtonAttributes: LocalButtonAttributes = {
    style: {
        width: 300,
        height: 50,
        borderColor: '#FFF',
        borderRadius: 5,
        borderWidth: 3,
        backgroundColor: '#149E9A',
        fontColor: '#FFF',
        fontSize: 18,
        invertColorH: true,
        loadingBorderColor: '',
    },
    props: {
        defaultValue: 'Create A New Account',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultLogoAttributes,
    defaultButtonAttributes,
};