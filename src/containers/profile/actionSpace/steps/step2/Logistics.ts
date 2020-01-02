import { LocalRButtonAttributes } from '../step1/Logistics';

const defaultUploadBtnAttributes: LocalRButtonAttributes = {
    style: {
        width: 120,
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
        defaultValue: 'Upload',
        disabled: true,
        isLoading: false,
    },
};

const defaultCancelBtnAttributes: LocalRButtonAttributes = {
    style: {
        width: 120,
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
        defaultValue: 'Cancel',
        disabled: true,
        isLoading: false,
    },
};

export {
    defaultUploadBtnAttributes,
    defaultCancelBtnAttributes,
};