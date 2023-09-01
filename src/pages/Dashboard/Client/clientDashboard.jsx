import Profile from "./profile";
import Jobs from "./myJobs";
import Actions from "./clientActions";
import Messages from "./messages";

const clientDashboard = () => {
  return (
    <>
      <main className="p-2 flex flex-col">
        <section className="w-full rounded-lg bg-purple-200">
          <Profile />
        </section>
        <section className="flex">
          <div className="basis-1/5">
            <Actions />
          </div>
          <div className="basis-3/5">
            <Jobs />
          </div>
          <div className="basis-1/5">
            <Messages />
          </div>
        </section>
      </main>
    </>
  );
};

export default clientDashboard;
