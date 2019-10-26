import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
const wrapperRedux = (Page) => {
    return(
        class PageWrapper extends React.Component{
            render(){
                return(
                    <Provider store={store}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}
export default wrapperRedux;