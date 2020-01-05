import { ILogoAttributes } from '../../../components/UVRLogo/interface';
import { IPreRoundedButtonAttributes } from '../../../global/utils/Style';

const defaultLogoAttributes: ILogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};

const defaultButtonAttributes: IPreRoundedButtonAttributes = {
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