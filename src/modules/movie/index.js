import React, { Component } from 'react';
import BlogsComponent from './movieComponent';
import SecondHeader from '../../common/components/secondHeader';

class Blogs extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

 

    render() {
        return (
            <>
            <SecondHeader />
                <BlogsComponent/>
            </>
        );
    }
}



export default Blogs;