import { IPreRoundedButtonAttributes } from '../../../global/utils/Style';
import { IRoundedButtonStyle } from '../../../components/button/rounded/interface';

const defaultButtonStyle: IRoundedButtonStyle = {
    width: 200,
    height: 40,
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#1C3144',
    fontColor: '#FFF',
    fontSize: 16,
    invertColorH: false,
    loadingBorderColor: '',
};

const defaultPrevPageButtonAttributes: IPreRoundedButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Previous',
        disabled: true,
        isLoading: false,
    },
};

const defaultNextPageButtonAttributes: IPreRoundedButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Next',
        disabled: false,
        isLoading: false,
    },
};

const defaultCardLoaderArray = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
    {
        id: '4',
    },
    {
        id: '5',
    },
    {
        id: '6',
    },
    {
        id: '7',
    },
    {
        id: '8',
    },
];

export {
    defaultNextPageButtonAttributes,
    defaultPrevPageButtonAttributes,
    defaultCardLoaderArray,
};