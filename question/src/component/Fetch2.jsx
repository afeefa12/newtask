import React,{useState, useEffect } from "react";
function Fetch2() {
    const [quotes, setQuotes] = useState([]);

useEffect(() => {
    fetch("https://dummyjson.com/quotes")
    .then((response) => response.json())
    .then((data) => setQuotes(data.quotes.slice(0, 10)));

}, []);
return (
    <div>
        {quotes.map((quote) => (
            <h1 key={quote.id}>{quote.quote}</h1>

        ))}
    </div>
);
}
export default Fetch2;