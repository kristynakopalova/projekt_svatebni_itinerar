import { Link } from 'react-router-dom';
import './style.css';
import { DatePicker } from '@gsebdev/react-simple-datepicker';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const HomePage = () => {
  const [date, setDate] = useLocalStorage('date', '');
  const onChangeCallback = ({ target }) => {
    setDate(target.value);
  };
  return (
    <>
      <div className="homepage">
        <h1 className="homepage__heading">Svatební online itinerář</h1>
        <h2 className="homepage__subtitle">
          Naplánujte si svůj velký den online
        </h2>
        <DatePicker
          id="datepicker-id"
          name="date-demo"
          onChange={onChangeCallback}
          value={date}
          placeholder={date}
        />
        <button className="homepage__button">
          <Link to="/planner" state={{ date }}>
            Začít
          </Link>
        </button>
      </div>
    </>
  );
};
