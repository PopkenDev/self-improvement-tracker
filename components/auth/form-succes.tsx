import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const FormSucces = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md border border-emerald-500/30 bg-emerald-500/15 p-3 text-sm text-emerald-500">
      <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
