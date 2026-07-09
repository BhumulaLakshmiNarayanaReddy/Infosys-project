function Loader({ text = 'Loading...' }) {
  return (
    <div className="sp-loader">
      <div className="sp-spinner" />
      <p>{text}</p>
    </div>
  );
}

export default Loader;
