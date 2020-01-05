import { IGroupButtonAttributes } from '../../../../../components/button/elliptical/interface';
import {
    IPreLabelEffectInputAttributes,
    IPreRoundedButtonAttributes,
} from '../../../../../global/utils/Style';

const defaultTitleAttributes: IPreLabelEffectInputAttributes = {
    style: {
        width: 200,
        borderColor: '#1C3144',
        borderRadius: 5,
        fontSize: 14,
    },
    props: {
        value: '',
        isRequired: true,
        placeholder: 'Title',
        type: 'text',
    },
};

const defaultTagBtnGroupAttributes: IGroupButtonAttributes['attributes'] = [
    {
        style: {
            backgroundColor: '#FFF',
            fontColor: '#149E9A',
        },
        props: {
            defaultId: '1',
            defaultValue: 'VR',
            isSelected: false,
        },
    },
    {
        style: {
            backgroundColor: '#FFF',
            fontColor: '#149E9A',
        },
        props: {
            defaultId: '2',
            defaultValue: 'Campus',
            isSelected: false,
        },
    },
    {
        style: {
            backgroundColor: '#FFF',
            fontColor: '#149E9A',
        },
        props: {
            defaultId: '3',
            defaultValue: 'Event',
            isSelected: false,
        },
    },
];

const defaultDoneButtonAttributes: IPreRoundedButtonAttributes = {
    style: {
        width: 150,
        height: 40,
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 5,
        backgroundColor: '#1C3144',
        fontColor: '#FFF',
        fontSize: 16,
        invertColorH: false,
        loadingBorderColor: '#18626B'
    },
    props: {
        defaultValue: 'Done',
        disabled: true,
        isLoading: false,
    },
};

export {
    defaultTitleAttributes,
    defaultTagBtnGroupAttributes,
    defaultDoneButtonAttributes,
};