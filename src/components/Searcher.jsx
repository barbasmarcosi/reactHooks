const Searcher = ({ searchInput, search, onSearch }) => (
    <input
          ref={searchInput}
          placeholder="Search character"
          type="text"
          className="Searcher"
          value={search}
          onChange={onSearch}
        />
);

export default Searcher;