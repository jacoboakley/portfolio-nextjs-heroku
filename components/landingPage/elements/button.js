import Link from 'next/link'

const Button = () => (
  <Link href="/about">
    <button>See More

    <style jsx>{`
      button {
        margin: 1em;
        padding-left: 1em;
        padding-right: 1em;

        background: transparent;
        border: 1px solid #8a0099;
        color: #8a0099;
        cursor: pointer;
        font-size: 5vmin;
      }

      button:hover {
        border: 1px solid white;
        color: silver;
      }
    `}</style>

    </button>
    
  </Link>
);

export default Button