import src from 'assets/img/spinner.gif';

const Spinner: React.FC<any> = (props) => 
  <img
    src={src}
    {...props}
  />

export { Spinner };