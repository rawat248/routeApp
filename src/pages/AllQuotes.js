import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Prem", text: "Learning react is fun" },
  { id: "q2", author: "preuu", text: "Learning react is great" },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
      
    </div>
  );
};

export default AllQuotes;
