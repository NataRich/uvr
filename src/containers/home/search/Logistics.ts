import {
    IPreIconInFrontInputAttributes,
    IPreEllipticalButtonAttributes,
    IPreRoundedButtonAttributes
} from '../../../global/utils/Style';
import { IEllipticalButtonStyle } from '../../../components/button/elliptical/interface';
import Magnifier from '../../../assets/icons/magnifier.svg';

const defaultInputAttributes: IPreIconInFrontInputAttributes = {
    style: {
        borderColor: '#149E9A',
        borderRadius: 5,
        fontSize: 16,
        hasBorder: true,
        inputWidth: 310,
        imgWidth: 35,
    },
    props: {
        image: Magnifier,
        placeholder: 'Looking for ...',
        type: 'text',
        value: '',
    },
};

const defaultButtonGroupStyle: IEllipticalButtonStyle = {
    backgroundColor: '#FFF',
    fontColor: '#149E9A',
};

const defaultSortButtonGroupAttributes: IPreEllipticalButtonAttributes[] = [
    {
        style: defaultButtonGroupStyle,
        props: {
            defaultId: '1',
            defaultValue: 'Date',
            isSelected: true
        },
    },
];

const defaultOrderButtonGroupAttributes: IPreEllipticalButtonAttributes[] = [
    {
        style: defaultButtonGroupStyle,
        props: {
            defaultId: '1',
            defaultValue: 'ASC',
            isSelected: true
        },
    },
    {
        style: defaultButtonGroupStyle,
        props: {
            defaultId: '2',
            defaultValue: 'DESC',
            isSelected: false,
        },
    },
];

const defaultFindButtonAttributes: IPreRoundedButtonAttributes = {
    style: {
        width: 70,
        height: 44,
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 5,
        backgroundColor: '#149E9A',
        fontColor: '#FFF',
        fontSize: 18,
        invertColorH: false,
        loadingBorderColor: '#18626B',
    },
    props: {
        defaultValue: 'Find',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultInputAttributes,
    defaultSortButtonGroupAttributes,
    defaultOrderButtonGroupAttributes,
    defaultFindButtonAttributes,
};