import React, { useState } from 'react'
import { toast, Slide } from 'react-toastify'
import Loader from './Loader'
import QuoteActions from './QuoteActions'

const QuoteCard = ({ quote, loading, error, onRefresh }) => {
    if (loading) return <Loader />
    if (error) return <p className='text-red-600'>{error}</p>

    const [ liked, setLiked ] = useState(false);

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);

    toast.success('Copied to clipboard!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  } catch (err) {
    toast.error('Copy failed!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  }
};

const handleFavourite = () => {
  try {
    const storedFavs = JSON.parse(localStorage.getItem("favQuotes")) || [];

    storedFavs.push(quote);

    localStorage.setItem("favQuotes", JSON.stringify(storedFavs));

    toast.success("Added to favourites! ⭐", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  } catch (err) {
    toast.error("Failed to add favourite!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  }
};

  return (
    <div
    className="max-w-md w-full flex flex-col items-center text-center justify-between 
    min-h-60 p-6 rounded-3xl shadow-[0_15px_60px_rgba(0,0,0,0.25)] 
  bg-white/20 backdrop-blur-lg border border-white/30"
    >
        <div className=''>
         <p className='text-xl leading-relaxed font-bold'>"{quote.text}"</p>
         <p className='text-xl justify-center mt-2 tracking-wide italic font-medium'>- {quote.author}</p>
        </div>


      <QuoteActions
        liked={liked}
        setLiked={setLiked}
        handleCopy={handleCopy}
        handleFavourite={handleFavourite}
        onRefresh={onRefresh}
      />

    </div>
  )
}

export default QuoteCard
