import useQuotes from '../hooks/useQuotes'
import QuoteCard from '../components/QuoteCard';
import { useState } from 'react';

const gradients = [
  "linear-gradient(to right, #cd93ff, #70e2ff, #9fff5b, #ffe83f, #ffa647, #ff75c3)",

  "linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4)",

  "linear-gradient(to right, #a18cd1, #fbc2eb, #fad0c4)",

  "linear-gradient(to right, #89f7fe, #66a6ff)",

  "linear-gradient(to right, #fddb92, #d1fdff)",

  "linear-gradient(to right, #ffecd2, #fcb69f)",

  "linear-gradient(to right, #d9afd9, #97d9e1)",

  "linear-gradient(to right, #84fab0, #8fd3f4)",

  "linear-gradient(to right, #ffdde1, #ee9ca7)",

  "linear-gradient(to right, #c2e9fb, #a1c4fd)"
];

const Home = () => {

const [bgIndex, setBgIndex] = useState(0);

const { quote, loading, error, getNewQuote } = useQuotes();

const handleNextBg = () => {
  setBgIndex((prev) => (prev + 1) % gradients.length);
};

  return (
    <div className='min-h-screen flex items-center justify-center p-6'
    style={{ background: gradients[bgIndex] }}
    >
        <QuoteCard 
          quote={quote}
          loading={loading}
          error={error}
          onRefresh={() => {
          getNewQuote();
          handleNextBg();
        }}
        />
    </div>
  )
}

export default Home
