import React from "react";

export const Root = () => {
  return (
    <>
      <div>
        <h1>Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="search contacts"
              placeholder="search "
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true}></div>
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};
