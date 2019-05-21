import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({ el }) => {
  const { title } = el.volumeInfo;
  const { smallThumbnail } = el.volumeInfo.imageLinks;
  const { description } = el.volumeInfo;
  const { authors } = el.volumeInfo;
  return (
    <li>
      <article>
        {smallThumbnail && <img src={smallThumbnail} alt="" />}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {authors && <p>Авторы: {authors.map(el => el)}</p>}
      </article>
    </li>
  );
};

export default BookListItem;

BookListItem.propTypes = {
  // OnSearch: PropTypes.func.isRequired,
  // onInput: PropTypes.func.isRequired,
  // onSelect: PropTypes.func.isRequired,
};

// BookListItem принимает пропы image (картинка), title (заголовок), description (описание), author (автор), publisher (издательство) и publishedDate (год издания), pageCount (кол-во страниц), rating (рейтинг).

// volumeInfo:
// allowAnonLogging: false
// authors: ["Тиленс Томас Марк"]
// canonicalVolumeLink: "https://market.android.com/details?id=book-VmGLDwAAQBAJ"
// categories: ["Computers"]
// contentVersion: "1.1.1.0.preview.3"
// description: "Книга "React в действии" знакомит фронтенд-разработчиков с фреймворком React и смежными инструментами. Сначала вы познакомитесь с библиотекой React, затем освежите материал о некоторых фундаментальных идеях в данном контексте и узнаете о работе с компонентами. Вы на практике освоите чистый React (без транспиляции, без синтаксических помощников), перейдете от простейших статических компонентов к динамическим и интерактивным. Во второй половине книги рассмотрены различные способы взаимодействия с React. Вы изучите базовые методы жизненного цикла, научитесь создавать поток данных, формы, а также тестировать приложения. На закуску вас ждет материал об архитектуре React-приложения, взаимодействии с Redux, экскурс в серверный рендеринг и обзор React Native."
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=VmGLDwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=VmGLDwAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
// industryIdentifiers: (2) [{…}, {…}]
// infoLink: "https://play.google.com/store/books/details?id=VmGLDwAAQBAJ&source=gbs_api"
// language: "ru"
// maturityRating: "NOT_MATURE"
// pageCount: 368
// panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
// previewLink: "http://books.google.com.ua/books?id=VmGLDwAAQBAJ&printsec=frontcover&dq=react+subject:computers&hl=&cd=1&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2018-11-07"
// publisher: ""Издательский дом ""Питер""""
// readingModes: {text: true, image: true}
// title: "React в действии"
