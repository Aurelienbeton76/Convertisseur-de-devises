import './styles.scss';

interface TogglerProps {

  onClickToggle: () => void
  open: boolean
}

function Toggler({ onClickToggle, open }: TogglerProps) {

  const cssClassName = open ? 'toggler toggler--open' : 'toggler';

  return (
    <button
      type="button"
      className={cssClassName}
      onClick={onClickToggle}
    >
      =
    </button>
  );
}

export default Toggler;
