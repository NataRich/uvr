import { IPreRoundedButtonAttributes } from '../../../../../global/utils/Style';

const defaultUploadBtnAttributes: IPreRoundedButtonAttributes = {
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

const defaultCancelBtnAttributes: IPreRoundedButtonAttributes = {
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