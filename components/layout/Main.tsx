import { PropsWithChildren } from "react";

type MainProps = PropsWithChildren<{}>;

export default function Main({ children }: MainProps) {
  return (
    <>
      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          background-color: #f9f9f9;
        }

        .container {
          flex-basis: var(--container-width);
          padding: var(--container-padding);
        }
      `}</style>
    </>
  );
}
