import { ChangeEvent } from 'react';
import './Search.scss';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { getSearchWith } from '../../helpers/searchHelper';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      getSearchWith(searchParams, { query: e.target.value || null }),
    );
  };

  const onFocusHandle = () => {
    if (id) {
      navigate('/');
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        className="search__input"
        value={query}
        onChange={onChangeHandle}
        onFocus={onFocusHandle}
      />
      <AiOutlineSearch />
    </div>
  );
};

export default Search;
