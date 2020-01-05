import {
    IPreEllipticalButtonAttributes,
    IPreRoundedButtonAttributes,
} from '../../../global/utils/Style';

const defaultDelButtonAttributes: IPreRoundedButtonAttributes = {
    style: {
        width: 50,
        height: 25,
        borderColor: '#931621',
        borderRadius: 3,
        borderWidth: 3,
        backgroundColor: '#931621',
        loadingBorderColor: '#931621',
        fontColor: '#FFF',
        fontSize: 12,
        invertColorH: true,
    },
    props: {
        defaultValue: 'Delete',
        isLoading: false,
        disabled: false,
    },
};

const defaultWatchButtonAttributes: IPreEllipticalButtonAttributes = {
    style: {
        backgroundColor: '#0165A3',
        fontColor: '#FFF',
    },
    props: {
        defaultId: '1',
        defaultValue: 'Watch',
    },
};

const defaultMoreButtonAttributes: IPreEllipticalButtonAttributes = {
    style: {
        backgroundColor: '#931621',
        fontColor: '#FFF',
    },
    props: {
        defaultId: '2',
        defaultValue: 'More',
    },
};

const defaultBackButtonAttributes: IPreEllipticalButtonAttributes = {
    style: {
        backgroundColor: '#149E9A',
        fontColor: '#FFF',
    },
    props: {
        defaultValue: 'Back',
    },
};

export {
    defaultDelButtonAttributes,
    defaultWatchButtonAttributes,
    defaultMoreButtonAttributes,
    defaultBackButtonAttributes,
};