import { Card } from "@heroui/react";
const TasksCard = ({ task }) => {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>{task?.title || "No-title"}</Card.Title>
          <Card.Description>
            {task?.description || "description not found"}
          </Card.Description>
        </Card.Header>
        <Card.Footer>
          <div className="flex justify-between w-full">
            <p>{task?.assignedTo?.name || "Name not Found"}</p>
            <p>{task?.tags?.join(", ") || "No Tags"}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TasksCard;
