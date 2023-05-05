import { ReactComponent as SearchIcon } from './../assets/icon-search.svg';

import s from './Search.module.scss';
import {Button} from "../Button/Button";

export interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

export type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={s.search}>
        <label htmlFor="search" className={s.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={s.textField}
          id="search"
          name="username"
          placeholder="Search friend"
            // @ts-ignore
          autoComplete="off"
//          readOnly onFocus={"this.removeAttribute('readonly')"}
        />
        {hasError && (
          <div className={s.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
};
