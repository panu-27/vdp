import { FaShoppingCart } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

        <p className="text-sm text-gray-600 mb-4">
          {course.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700">
            ₹{course.price}
          </span>

          <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            <FaShoppingCart />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
