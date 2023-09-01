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
        <section>
          <Actions />
        </section>
        <section className="flex">
          <div className="basis-2/3">
            <Jobs />
          </div>
          <div className="basis-1/3">
            <Messages />
          </div>
        </section>
      </main>
    </>
  );
};

export default clientDashboard;
