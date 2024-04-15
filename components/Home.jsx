// Import Components
import Pomodoro from "./Pomodoro";
import Header from "./Header";
import Clock from "./Clock";
import FloatingNavbar from "./FloatingNavbar";

function Home() {
    const home = false;
  return (
    <main className="flex flex-col justify-between w-full min-h-screen p-12">
      <Header quote={false} />
      {
        home ? (
          <Clock />
        ) : (
          <Pomodoro />
        )
      }
      <FloatingNavbar />
    </main>
  );
}

export default Home;
