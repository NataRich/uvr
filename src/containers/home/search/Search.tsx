import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import Input from '../../../components/input/iconInFront/Input';
import {
    LocalInputAttributes,
} from './Logistics';
import {
    defaultInputAttributes,
} from './Logistics';

const Search: React.FC = () => {
    const [ inputAttri, setInputAttri ] = useState<LocalInputAttributes>(defaultInputAttributes);

    const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        setInputAttri({...inputAttri, props: {...inputAttri.props, value}});
    };

    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ height: 'auto' }}>
            <div>
                {/* filter button */}
            </div>
            <Input {...{style: inputAttri.style,
                        props: inputAttri.props,
                        onChangeHandler: onChangeSearchHandler}} />
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Search;