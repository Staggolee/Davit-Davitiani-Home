import React from 'react';
import AppRouter from '../router/AppRouter';
import GbooksApi from '../api/GbooksApi';
import SearchBar from './SearchBar';
import BookList from './bookLIst';



class App extends React.Component {
    state = {
        books: []
        
    }

   onSearchSubmit = async (term) => {
    const response = await GbooksApi.get('https://www.googleapis.com/books/v1/volumes?', {
                params: {q: term},
                
        });

        // console.log(response.data.items)
        this.setState({books: response.data.items})
    }


    render() {
        return (
        
        <div className="ui container" style={{marginTop: '10px'}}>
        <AppRouter />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <BookList books={this.state.books} />
    </div>
        );   
    }
}

export default App;
