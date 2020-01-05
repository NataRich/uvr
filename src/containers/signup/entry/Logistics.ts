import { LocalButtonAttributes } from './interface';
import { ILogoAttributes } from '../../../components/UVRLogo/interface';

const defaultLogoAttributes: ILogoAttributes = {
    style: {
        position: 'LHS',
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
        defaultValue: 'Log In',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultLogoAttributes,
    defaultButtonAttributes,
};