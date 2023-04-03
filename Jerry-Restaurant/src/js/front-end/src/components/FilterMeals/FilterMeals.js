import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const FilterMeals = (props) => {
    
    // const[keyword,setkeyword]

    const inputChangeHandler = e => {
        
    };

    const onSearch = (value) =>{
        const keyword = value.trim();
        props.onFilter(keyword);
    }

    const onChange = (e) =>{
        const keyword = e.target.value.trim();
        props.onFilter(keyword);
        console.log("keyword",keyword)

    }

    return (
        <>
        <Input
            placeholder="input search text"
            onSearch={onSearch}
            onChange={onChange}
            style={{
                width: 300,

            }}
            prefix={<SearchOutlined />}
            />
        </>
        // <div className={classes.FilterMeals}>
        //     <div className={classes.InputOuter}>
        //         <input
        //             onChange={inputChangeHandler}
        //             className={classes.SearchInput}
        //             type="text"
        //             placeholder={"Please type keywords"}/>
        //         <FontAwesomeIcon
        //             className={classes.SearchIcon}
        //             icon={faSearch}/>
        //     </div>
        // </div>
    );
};

export default FilterMeals;
