import React from "react";

export const Footer = () => {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  React.useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(
        "https://api.quotable.io/random?minLength=10&maxLength=20"
      );
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };
    getQuote();

    //@ts-ignore
    // localStorage.setItem("author", author);

    // localStorage.setItem("quote", quote);
  }, [author, quote]);

  return (
    <footer>
      <div className="flex justify-between items-center h-10 w-screen bg-titlebar-color mt-auto mb-auto bottom-0  absolute">
        <h1 className="text-center w-screen text-slate-500">
          {quote} - {author}
        </h1>
      </div>
    </footer>
  );
};
