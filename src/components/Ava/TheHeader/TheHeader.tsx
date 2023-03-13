
import s from './TheHeader.module.scss';
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";

export const TheHeader = () => (
  <div className={s.header}>
    <div className={s.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);
