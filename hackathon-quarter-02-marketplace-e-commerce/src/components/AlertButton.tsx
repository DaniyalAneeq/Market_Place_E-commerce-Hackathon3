// components/AlertButton.js
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

export default function AlertButton() {
  const handleClick = () => {
    Swal.fire({
      title: "Item deleted successfully!",
      text: "You can always add it back later.",
      icon: "success", // Icon: success, error, warning, info, question
      confirmButtonText: "OK",
    });
  };

  return (
    <button
      onClick={handleClick}
     className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
    >
    <AiTwotoneDelete className="w-5 h-5" />
    </button>
  );
}