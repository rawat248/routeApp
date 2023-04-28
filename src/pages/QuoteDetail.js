import React, { Fragment } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import HighLightedQuote from "../components/quotes/HighLightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Prem", text: "Learning react is fun" },
  { id: "q2", author: "preuu", text: "Learning react is great" },
];
const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <Fragment>
        <HighLightedQuote text={quote.text} author={quote.author} />

        <div className="centered">
          <Link className="btn--flat" to="comments">
            Load comments
          </Link>
        </div>

        <Outlet />
      </Fragment>
    </div>
  );
};

export default QuoteDetail;
