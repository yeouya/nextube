import Link from "next/link";
import {
  MdNotificationsNone,
  MdOutlineMenu,
  MdSearch,
  MdVideoSettings,
} from "react-icons/md";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <h1>
            <Link href="/">
              <a>NexTube</a>
            </Link>
          </h1>
          <form role="search">
            <input type="search" placeholder="검색" />
            <button type="submit">
              <MdSearch />
            </button>
          </form>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <MdVideoSettings />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <MdOutlineMenu />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <MdNotificationsNone />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 9999;
          display: flex;
          justify-content: center;
          border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
          background-color: rgba(255, 255, 255, 0.95);
        }

        .container {
          flex-basis: var(--container-width);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          padding: 0.5rem var(--container-padding);
        }

        h1 {
          font-size: 1.2rem;
          font-weight: bold;
        }

        form {
          flex-basis: 38.5rem;
          display: flex;
          border: 0.0625rem solid #ccc;
          border-radius: 0.2rem;
          overflow: hidden;
        }

        input {
          flex: 1;
          width: 0;
          padding: 0.6rem 0.4rem;
          font-size: 1rem;
          border: none;
        }

        button {
          display: flex;
          place-items: center;
          font-size: 1.5rem;
          padding: 0 1rem;
          border: none;
        }

        input:focus {
          outline: none;
        }

        ul {
          display: flex;
          gap: 1rem;
        }

        a {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
