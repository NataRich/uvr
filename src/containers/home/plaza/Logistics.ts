import { VideoClassType } from '../../../global/videos/class';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export type PlazaProps = {
    isFetchingVideos:   boolean;
    page:               number;
    setPage:            React.Dispatch<React.SetStateAction<number>>;
    videos:             VideoClassType[] | null;
};

export type LocalButtonAttributes = {
    style: RoundedButtonStyle,
    props: RoundedButtonProps,
};

const defaultButtonStyle: RoundedButtonStyle = {
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

const defaultPrevPageButtonAttributes: LocalButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Previous',
        disabled: true,
        isLoading: false,
    },
};

const defaultNextPageButtonAttributes: LocalButtonAttributes = {
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