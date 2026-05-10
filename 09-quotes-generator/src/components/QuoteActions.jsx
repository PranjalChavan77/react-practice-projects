import React from 'react'

const QuoteActions = ({
    liked,
    setLiked,
    handleCopy,
    handleFavourite,
    onRefresh,
}) => {
  return (
    <div className='flex justify-center gap-3 mt-6'>
            <button
              onClick={handleCopy}
              className='px-3 py-1 bg-gray-800 text-white rounded'
            >
                Copy
            </button>

            <button
              onClick={() => setLiked(!liked)}
              className='px-3 py-1 bg-pink-500 text-white rounded'
            >
                {liked ? "❤️ Liked" : "🤍 Like"}
            </button>

            <button
              onClick={handleFavourite}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
                ⭐ Favorite
            </button>

            <button
              onClick={onRefresh}
              className='px-3 py-1 bg-black text-white rounded cursor-pointer'
            >
               New Quote
            </button>

        </div>
  )
}

export default QuoteActions
