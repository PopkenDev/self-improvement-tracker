import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const FormError = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md border border-red-500/30 bg-red-500/15 p-3 text-sm text-red-500">
      <FontAwesomeIcon icon={faExclamationTriangle} className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
