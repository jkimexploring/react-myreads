import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import Shelf from '../Shelf'
import * as BooksAPI from '../../BooksAPI'
import '../../App'


const MainPage = ({books, updateShelf}) =>{    

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf currentShelf= "wantToRead" updateShelf = {updateShelf} title="Want to Read" books={books.filter(books => books.shelf === "wantToRead")}/>
              <Shelf currentShelf= "currentlyReading" updateShelf = {updateShelf} title="Currently Reading" books={books.filter(books => books.shelf === "currentlyReading")}/>
              <Shelf currentShelf= "read" updateShelf = {updateShelf} title="Read" books={books.filter(books => books.shelf === "read")}/>
              {/*<Shelf currentShelf= "didNotFinish" updateShelf = {this.updateShelf} title="Did Not Finish" books={this.state.books.filter(books => books.shelf === "didNotFinish")}/>*/}
            </div>
            <div className="open-search">
              <NavLink to='/search' className="to-search-bar">Add a book</NavLink>
            </div>
          </div>
      );}
    

export default MainPage;