import React from "react";
import { ImSpinner2 } from "react-icons/im";

export const Footer = () => {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(
        "https://api.quotable.io/random?minLength=10&maxLength=50"
      );
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };
    getQuote();

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    //@ts-ignore
    // localStorage.setItem("author", author);

    // localStorage.setItem("quote", quote);
  }, []);

  return (
    <footer>
      <div className="flex justify-between items-center h-10 w-screen bg-titlebar-color mt-auto mb-auto bottom-0 z-50 absolute">
        {loading ? (
          <div className="animate-spin justify-center w-full items-center flex">
            <ImSpinner2 />
          </div>
        ) : (
          <h1 className="text-center w-screen text-slate-500">
            {quote} - {author}
          </h1>
        )}
      </div>
    </footer>
  );
};
