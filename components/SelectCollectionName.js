import React, { useState } from 'react'
import AsyncSelect from 'react-select/async'
import { useForm, Controller  } from "react-hook-form";
import {AsyncSelectCustomStyles} from './AsyncSelectStyle'

const SelectCollectionName = ({fetchApi, moralisID}) => {

    // LOAD the dynamic DropDown
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const { control } = useForm();

    // handle input change event
    const handleInputChange = value => {
        setValue(value);
    };
    
    // load options using API call
    const loadOptions = (inputValue) => {
        //return fetch(`https://easylaunchnft.com/api/api-getCollectionNames-notDeployed` + '?id=' + ((Moralis.User.current()).id)).then(res => res.json()); 
        return fetch(fetchApi + '?id=' + moralisID).then(res => res.json());           
    };


    return (
        <> 
            <Controller
                name="collectionNameController"
                control={control}
                rules={{ required: true }}

                value={selectedValue}
                render={({ field }) => (
                <AsyncSelect
                    {...field}
                    styles={AsyncSelectCustomStyles}
                    id="CollectionName"
                    name="CollectionName"
                    isClearable
                    defaultOptions
                    getOptionLabel={e => e.name}
                    getOptionValue={e => e.name}
                    loadOptions={loadOptions}
                    onInputChange={handleInputChange}
                />   
                )}
            />  
        </>
    );
}

export default SelectCollectionName;