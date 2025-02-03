import { Session } from 'next-auth';

const Header = () => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
          {/* {session?.user?.name} */} Admin
        </h2>
      </div>

      {/*<p>Search</p>*/}
    </header>
  );
};
export default Header;
