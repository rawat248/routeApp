import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";


const NewQuote = React.lazy(()=>import('./pages/NewQuote'));
const QuoteDetail = React.lazy(()=>import('./pages/QuoteDetail'));
const NotFound = React.lazy(()=>import('./pages/NotFound'));
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'));


const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />} />
        </Route> 
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} /> 
        
      </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
