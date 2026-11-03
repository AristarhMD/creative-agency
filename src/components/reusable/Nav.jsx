export default function MobNav({ type }) {
  return (
    <div className={type}>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
      <button>Schedule a Call</button>
    </div>
  );
}
