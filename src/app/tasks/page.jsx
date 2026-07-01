import TasksCard from "@/components/TaskCard";
import { getTasks } from "@/lib/tasks";

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <div className="min-h-[100vh] flex justify-center font-semibold w-11/12 mx-auto">
      <div>
        <h2>Tasks: {tasks.length}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {tasks.map((task) => (
            <TasksCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
