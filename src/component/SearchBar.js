import React, { useEffect } from "react";

export default function SearchBar() {
  useEffect(() => {
    document.title = "FilmsHub";
  });

  return (
    <section>
      <form>
        <div>
          <label placeholder="what do you want to watch"></label>
          <input />
        </div>
      </form>
    </section>
  );
}
