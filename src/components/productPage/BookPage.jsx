//import {useAuth} from '../../context/AuthContext';
import { useBook } from "../../context/BookContext";
import { useEffect } from "react";
import "./BookPages.css";
import { Carousel } from "react-carousel3";

const style = {
    width: "100px",
    height: 500,
};

function BookPage() {
    const { books, getBooks } = useBook();
    const imageUrl =
        "https://www.contrapunto.com.sv/wp-content/uploads/2021/12/MiguelMarmolA1.jpg";

    useEffect(() => {
        //getUserBooks();
        getBooks();
    }, []);
    return (
        <>
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:
                            "linear-gradient(to bottom, #16235e 0%, #51fc72 100%)",
                        position: "relative",
                        zIndex:"50",
                        margin:"0",
                        padding:'0',
                    }}
                >
                    <Carousel
                        height={780}
                        width={1500}
                        yOrigin={62}
                        yRadius={50}
                        autoPlay={true}
                        
                    >
                        <div key={1} style={style}>
                            <img alt="" src={require("../../img/book1.jpeg")} />
                        </div>
                        <div key={2} style={style}>
                            <img alt="" src={require("../../img/book2.jpeg")} />
                        </div>
                        <div key={3} style={style}>
                            <img alt="" src={require("../../img/book3.jpeg")} />
                        </div>
                        <div key={4} style={style}>
                            <img alt="" src={require("../../img/book4.jpeg")} />
                        </div>
                        <div key={5} style={style}>
                            <img alt="" src={require("../../img/book5.jpeg")} />
                        </div>
                        <div key={6} style={style}>
                            <img alt="" src={require("../../img/book6.jpeg")} />
                        </div>
                        <div key={7} style={style}>
                            <img alt="" src={require("../../img/book7.jpeg")} />
                        </div>
                        <div key={8} style={style}>
                            <img alt="" src={require("../../img/book8.jpeg")} />
                        </div>
                        <div key={8} style={style}>
                            <img alt="" src={require("../../img/book9.jpeg")} />
                        </div>
                        <div key={8} style={style}>
                            <img
                                alt=""
                                src={require("../../img/book10.jpeg")}
                            />
                        </div>
                        <div key={8} style={style}>
                            <img
                                alt=""
                                src={require("../../img/book11.jpeg")}
                            />
                        </div>
                        <div key={8} style={style}>
                            <img
                                alt=""
                                src={require("../../img/book12.jpeg")}
                            />
                        </div>
                    </Carousel>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "#51fc72",
                        WebkitTextStroke: "2px #16235e",
                        zIndex: 50,
                    }}
                >
                    <h1 style={{ fontSize: "100px"}}>BOOKCHAIN </h1>
                </div>
            </div>
            <div id="centered-container">
                {books.map((book) => (
                    <div key={book._id} className="book-card">
                        <div className="image-container">
                            <img
                                src={book.imageUrl}
                                alt={book.title}
                                className="book-image"
                            />
                        </div>
                        <br />
                        <div className="book-info">
                            <h1>{book.title}</h1>
                            <p>
                                <b><i>Tema:</i></b> {book.topic}
                            </p>
                            <p>
                                <b><i>Autor:</i></b> {book.author}
                            </p>
                            <p>
                                <b><i>Edición:</i></b> {book.edition}
                            </p>
                            <p>
                                <b><i>ISBN:</i></b> {book.isbn}
                            </p>
                            <p>
                                <b><i>Detalle de serie: </i></b>
                                {book.serieDetails}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default BookPage;
