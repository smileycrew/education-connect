export const WorksheetsAside = ({ grades }) => {
  return (
    <aside className="flex flex-col sm:mx-5 overflow-hidden pt-5">
      <div>
        <p>Filters</p>
      </div>
      <nav>
        <p className="text-lg">By Favorites</p>
        <div className="border-b border-gray-900/10 p-4">
          <button className="hover:text-blue-800 hover:underline rounded text-gray-500">Favorites</button>
        </div>
        <p className="text-lg">By Grade</p>
        <ul className="border-b border-gray-900/10 p-4">
          {grades.map((grade, index) => (
            <li key={index}>
              <button
                className="hover:text-blue-800 hover:underline rounded text-gray-500" value={grade.id}>{grade.name}</button>
            </li>
          ))}
        </ul>
        <p className="text-lg">By Subject</p>
        <ul className="pt-2 p-4">
          {grades.map((subject, index) => (
            <li key={index}>
              <button
                className="hover: hover:text-blue-800 hover:underline rounded text-gray-500"
                value={subject.id}
              >
                {subject.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
