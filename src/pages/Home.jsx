import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";
import FramerTest from "../components/layout/FramerTest";
const Home = () => {
  return (
    <>
      <div className="flex flex-row-reverse ">
        <FramerTest />
        <UserSearch />
      </div>
      <UserResult />
    </>
  );
};

export default Home;
